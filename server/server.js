'use strict'

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./src/config')
const routes = require('./src/routes')

mongoose.connect(config.DB, {useNewUrlParser: true})

app.use(express.static(path.join(__dirname, '/static')))

app.use(morgan('dev'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

let port = config.SERVER_PORT || 8081

app.listen(port)

app.use(cors())

console.log('App listening on port ' + port)

app.use('/api', routes)

app.get('/', (req, res, next) => {
  res.sendfile('../dist/index.html')
})