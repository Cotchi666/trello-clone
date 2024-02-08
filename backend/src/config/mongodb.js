const MONGODB_URI =
  'mongodb+srv://sa:sa@cluster0.vadgnss.mongodb.net/?retryWrites=true&w=majority'

const DATABASE_NAME = 'trello-db'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance)
    throw new Error(' Must connect to Database first')
  return trelloDatabaseInstance
}
export const CLOSE_DB = async () => {
  console.log("Close db")
  await mongoClientInstance.close()
  console.log("Disconnected mongoDB!")


}