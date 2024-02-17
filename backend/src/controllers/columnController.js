import { StatusCodes } from 'http-status-codes'
import { columnService } from '~/services/columnService'
// import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {
    const rs = await columnService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(rs)
  } catch (error) {
    next(error)
  }
}

export const columnController = {
  createNew
}
