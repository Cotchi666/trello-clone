/* eslint-disable no-useless-catch */
import { StatusCodes } from 'http-status-codes'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'
import { cloneDeep } from 'lodash'
import { columnModel } from '~/models/columnModel'
import { cardModel } from '~/models/cardModel'
const createNew = async reqBody => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    const createdBoard = await boardModel.createNew(newBoard)
    const data = await boardModel.findOneById(createdBoard.insertedId)
    console.log('getBoardData', data)
    return data
  } catch (error) {
    throw error
  }
}
const getDetails = async boardId => {
  try {
    const board = await boardModel.getDetails(boardId)
    if (!board) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Board Not Found!')
    }
    //clone new board
    const resBoard = cloneDeep(board)
    resBoard.columns.forEach(column => {
      column.cards = resBoard.cards.filter(
        card => card.columnId.toString() === column._id.toString()
      )
    })
    // resBoard.columns.forEach(column=>{
    //   column.cards = resBoard.cards.filter(card=>card.columnId.equals(column._id))
    // })
    //resign card into column of the cloned board
    delete resBoard.cards

    return resBoard
  } catch (error) {
    throw error
  }
}
const update = async (boardId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    const updatedBoard = await boardModel.update(boardId, updateData)
    return updatedBoard
  } catch (e) {
    throw new Error(e)
  }
}
const moveCardToDifferentColumn = async reqBody => {
  try {
    await columnModel.update(reqBody.prevColumnId, {
      cardOrderIds: reqBody.prevCardOrderIds,
      updatedAt: Date.now()
    })
    await columnModel.update(reqBody.nextColumnId, {
      cardOrderIds: reqBody.nextCardOrderIds,
      updatedAt: Date.now()
    })
    await cardModel.update(reqBody.currentCardId, {
      columnId: reqBody.nextColumnId
    })
    return { updateResult: 'Successfully! ' }
  } catch (error) {
    throw new Error(error)
  }
}
export const boardService = {
  createNew,
  getDetails,
  update,
  moveCardToDifferentColumn
}
