import express from 'express'
import { mapOrder } from './utils/sorts.js'
import { CONNECT_DB, GET_DB ,CLOSE_DB} from './config/mongodb.js'
import exithook from 'async-exit-hook'
// Run server
const START_SERVER = () => {
  const app = express()
  const hostname = 'localhost'
  const port = 8000
  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())

    // Test Absolute import mapOrder
    console.log(
      mapOrder(
        [
          { id: 'id-1', name: 'One' },
          { id: 'id-2', name: 'Two' },
          { id: 'id-3', name: 'Three' },
          { id: 'id-4', name: 'Four' },
          { id: 'id-5', name: 'Five' }
        ],
        ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'],
        'id'
      )
    )
    res.end('<h1>Hello World!</h1><hr>')
  })
  app.listen(port, hostname, () => {
    console.log(` I am running at ${hostname}:${port}/`)
  })
  exithook(()=>{
    console.log(`Vo `)

    CLOSE_DB()

    console.log(`Exit `)
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

// CONNECT_DB()
//   .then(()=> console.log("Connected to MongoDB Cloud Atlas"))
//   .then(()=> START_SERVER())
//   .catch(error=>{
//     console.log(error)
//     process.exit(0)
//   })
