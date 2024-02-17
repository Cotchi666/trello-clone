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
    return data.value || null
  } catch (error) {
    throw error
  }
}

export const columnService = {
  createNew
}
