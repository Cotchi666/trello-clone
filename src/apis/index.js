import axios from 'axios'
import { API_ROOT } from '~/utlis/constants'

export const fetchBoardDetailsAPI = async boardId => {
  console.log(`${API_ROOT}v1/boards/${boardId}`)
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  console.log(7)
  return response.data
}
