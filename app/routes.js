'use strict'

const express = require('express')
const routes = express.Router()
const Users = require('./database/Users')
const uuidv1 = require('uuid/v1')

routes.route('/register').post(function (req, res) {
  Users.create(
    {
      documentId: uuidv1,
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
})

routes.route('/login').post(function (req, res) {
  let credentials = {
    username: req.body.username,
    password: req.body.password
  }
  
  Users.findOne(credentials, function (err, user) {
    if (error) {
      return next(new Error('User was not found'))
    } else {
      res.status(200).json(user)
    }
  })
})