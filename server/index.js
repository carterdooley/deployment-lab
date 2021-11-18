const express = require('express')

const cors = require('cors')

const path = require('path')

const app = express()

app.use(cors())


const {seed} = require('./controller.js')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '1689ca6392ec439caf91d04f46a7b9ce',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Working')

//Functionality

app.post('/posthalo', seed)
app.post('/posthalogame' insertHalo)





//Merging with Heroku
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})


app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../style.css'))
  })

const port = process.env.PORT || 4005

// app.post('/post', (req, res) => { try {
//   nonExistantFunction()
//   } catch (error) {
//     rollbar.warning('Info Not Recieved')
//   }
// })
  
// app.put('/put', (req, res) => { try {
//   nonExistantFunction()
//   } catch (error) {
//     rollbar.critical('Does Not Exist')
//   }
// })











app.listen(port, () => {
    console.log(`App running on ${port}`)
})