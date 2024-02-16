/* eslint-disable no-useless-catch */
import { StatusCodes } from 'http-status-codes'
import { boardModel } from '~/models/boardModel'
import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'
import { cloneDeep } from 'lodash'
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
export const boardService = {
  createNew,
  getDetails
}
