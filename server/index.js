const express = require('express')
const server = express();
const path = require('path')

const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '1689ca6392ec439caf91d04f46a7b9ce',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Working')

app.get('/get', (req, res) => {try {
  nonExistentFunction();
} catch (error) {
  rollbar.error(error);
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