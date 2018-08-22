'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuidv1 = require('uuid/v1')

const routes = express.Router()
const Users = require('../database/Users')
const config = require('./config')

routes.route('/register').post((req, res) => {
  let usernameObj = {
    username: req.body.username
  }

  Users.findOne(usernameObj, function (err, user) {
    if (err) {
      res.status(500).send(`Error on the server: ${err}`)
    } else {
      if (!user) {
        Users.create(
          {
            documentId: uuidv1(),
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            documentType: req.body.documentType
          },
          function (error, user) {
            if (error) {
              res.status(400).send('Unable to create new user.')
            }

            res.status(200).json(user)
          }
        )
      } else {
        res.status(401).send(`User with username ${req.body.username} already exists!`)
      }
    }
  })
})

routes.route('/login').post((req, res) => {
  let credentials = {
    username: req.body.username
  }
  
  Users.findOne(credentials, function (err, user) {
    if (err) {
      res.status(500).send(`Error on the server: ${err}`)
    } else {
      if (user) {        
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

        if (!passwordIsValid) {
          res.status(401).send(`Invalid password for username ${req.body.username}`)
        } else {
          let token = jwt.sign({ id: user.documentId }, config.SECRET, {expiresIn: config.EXPIRES_IN})
          res.status(200).send({ auth: true, token: token, user: user })
        }        
      } else {
        res.status(404).send(`No user found with username ${req.body.username}!`)
      }
    }
  })
})

module.exports = routes