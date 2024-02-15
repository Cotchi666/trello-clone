import dotenv from 'dotenv'
import path from 'path'
// Specify the path to your .env file
const envPath = path.resolve(__dirname, '../../../.env') // Go up two levels to reach trello-mernstack directory
console.log(envPath)

// Load the environment variables
dotenv.config({ path: envPath })

// Now you can access the environment variables as before
export const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  AUTHOR: process.env.AUTHOR,
  BUILD_MODE: process.env.BUILD_MODE
}
