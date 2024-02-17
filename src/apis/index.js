import axios from 'axios'
import { API_ROOT } from '~/utlis/constants'

// Boards
export const fetchBoardDetailsAPI = async boardId => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  return response.data
}
// Columns
export const createNewColumnAPI = async newColumnData => {
  console.log('new column data', newColumnData)
  const response = await axios.post(`${API_ROOT}/v1/columns`, newColumnData)
  return response.data
}
export const updateBoardDetailsAPI = async (boardId, updateData) => {
  const response = await axios.post(
    `${API_ROOT}/v1/boards${boardId}`,
    updateData
  )
  return response.data
}
// Cards
export const createNewCardAPI = async newCardData => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, newCardData)
  return response.data
}
