/* eslint-disable no-useless-catch */
import { columnModel } from '~/models/columnModel'
import { boardModel } from '~/models/boardModel'

const createNew = async reqBody => {
  try {
    const newColumn = {
      ...reqBody
    }
    const createdColumn = await columnModel.createNew(newColumn)
    const data = await columnModel.findOneById(createdColumn.insertedId)
    if (data) {
      data.cards = []
      await boardModel.pushColumnOrderIds(data)
    }
    return data
  } catch (error) {
    throw error
  }
}
const update = async (columnId, reqBody) => {
  try {
    const updateData = {
      ...reqBody,
      updatedAt: Date.now()
    }
    const updatedColumn = await columnModel.update(columnId, updateData)
    return updatedColumn
  } catch (e) {
    throw new Error(e)
  }
}
export const columnService = {
  createNew,
  update
}
