import { createServer } from 'node:http'
// createServer is asynchronous function so that we can use (req, res)

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello HTTP world!')
})

const host = 'localhost'
const port = 3000

// server.lister function is also asynchronous and require us to pass a callback function, which will
// execute soon after the server is up running.

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
