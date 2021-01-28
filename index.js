// This will be our application entry. We'll setup our server here.
const http = require('http')
const normalizePort = require('normalize-port')

const app = require('./app')

const port = normalizePort(process.env.PORT, 10) || 5000
app.set('port', port)

const server = http.createServer(app).listen(port, () => {
  console.log(`🤘 Server is up on port ${port}`)
})

server.on('error', function (error) {
  console.log(error)
})
