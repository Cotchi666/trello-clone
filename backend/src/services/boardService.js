/* eslint-disable no-useless-catch */
import { boardModel } from '~/models/boardModel'
import { slugify } from '~/utils/formatters'

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
export const boardService = {
  createNew
}
