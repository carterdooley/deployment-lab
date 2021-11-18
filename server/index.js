const express = require('express')
const server = express();
const path = require('path')

const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '881dcde6339947578e6d3c60b181042b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get('/get', (req, res) => {try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
}
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})


app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../style.css'))
  })

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`App running on ${port}`)
})