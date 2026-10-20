import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

// Setup Client
const url = 'mongodb://127.0.0.1:27017/'
const dbName = 'ch2'
const client = new MongoClient(url)

// Connect to Database
try {
  await client.connect()
  console.log('Successfully connected to database!')
} catch (err) {
  console.error('Error connecting to database:', err)
}

// create server
const server = createServer(async (req, res) => {
  // select DB and collection
  const db = client.db(dbName)
  const users = db.collection('users')

  // fetch Data find and to Array
  // we have to call toArray to iterate MongoDB Node.js driver to resolve it
  const usersList = await users.find().toArray()

  // Send Response
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(usersList))
})

// server listen
const host = 'localhost'
const port = 3000

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
