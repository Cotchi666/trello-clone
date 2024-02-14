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
    console.log('createDBoard', createdBoard)
    return createdBoard
  } catch (error) {
    throw error
  }
}
export const boardService = {
  createNew
}
