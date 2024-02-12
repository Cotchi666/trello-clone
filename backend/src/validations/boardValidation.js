import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      'any.required': 'Title is required (cotchidev)',
      'string.empty': 'Title is not allowed to be empty (cotchidev)',
      'string.min':
        'Title length must be at least 3 characters long (cotchidev)',
      'string.max':
        'Title length must be less than or equal to 5 characters long (cotchidev)',

      'string.trim':
        'Title must not have leading or trailing whitespace (cotchidev)'
    }),
    description: Joi.string().required().min(3).max(256).trim().strict()
  })
  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // trigger controller
    next()
  } catch (error) {
    res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ errors: new Error(error).message })
  }
}

export const boardValidation = {
  createNew
}
