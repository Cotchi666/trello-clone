import express from 'express'
import { mapOrder } from '~/utils/sorts'
import exithook from 'async-exit-hook'
import { env } from '~/config/environment'
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb'
import { APIs_V1 } from '~/routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'
// Run server
const START_SERVER = () => {
  const app = express()
  const hostname = env.APP_HOST
  const port = env.APP_PORT
  const author = env.AUTHOR
  // config
  app.use(express.json())
  // api v1
  app.use('/v1', APIs_V1)
  // error handling middleware
  // app.use(errorHandlingMiddleware)

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })
  app.listen(port, hostname, () => {
    console.log(`Hello ${author}, I am running at ${hostname}:${port}/`)
  })

  exithook(() => {
    CLOSE_DB()
  })
};

// Connect to database
(async () => {
  try {
    console.log('1. Connecting to MongoDB Cloud Atlas...')
    await CONNECT_DB()
    console.log('2. Connected to MongoDB Cloud Atlas...')
    START_SERVER()
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
})()
