const express = require('express')

const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/main.js'))
  })

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../style.css'))
  })

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`App running on ${port}`)
})