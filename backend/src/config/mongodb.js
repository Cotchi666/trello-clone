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
