import { createServer } from 'node:http'
import { readFileSync } from "node:fs";
// createServer is asynchronous function so that we can use (req, res)

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(readFileSync('backend/users.json'))
// In this case we do not need to parse the JSON, as res.end() expects a string anyway
})

const host = 'localhost'
const port = 3000

// server.lister function is also asynchronous and require us to pass a callback function, which will
// execute soon after the server is up running.

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})

