const express = require('express')
const server = express();
const path = require('path')

const app = express()

// var Rollbar = require('rollbar')
// var rollbar = new Rollbar({
//   accessToken: 'ac5546d947ba4ebab06a8e2b4d254937',
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// })

// rollbar.log('Hello world!')

// server.get('/get', (req, res) => {
//   res.send('Welcome to API')
//   rollbar.info('User interacted')
// })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})


app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../style.css'))
  })

const port = process.env.PORT || 4005

const PORT = process.env.Port || 7000
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
