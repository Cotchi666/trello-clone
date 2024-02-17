/* eslint-disable no-useless-catch */
import { cardModel } from '~/models/cardModel'
import { columnModel } from '~/models/columnModel'

const createNew = async reqBody => {
  try {
    const newCard = {
      ...reqBody
    }
    const createdCard = await cardModel.createNew(newCard)
    const data = await cardModel.findOneById(createdCard.insertedId)
    if (data) {
      await columnModel.pushCardOrderIds(data)
    }
    return data
  } catch (error) {
    throw error
  }
}

export const cardService = {
  createNew
}
