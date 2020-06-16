const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = require('express').Router()

const Users = require('../users/usersModel')
const { isValid } = require('../users/usersService')
const constants = require('../config/constants.js')


//REGISTRATION
router.post('/register', (req, res) => {
     const credentials = req.body
     if(isValid(credentials)) {
          const rounds = process.env.BCRYPT_ROUNDS || 6

          //hash the password
          const hash = bcryptjs.hashSync(credentials.password, rounds)
          credentials.password = hash

          //save user to the database
          Users.add(credentials)
               .then(user => {
                    res.status(201).json({
                         message: 'Succesfully Registered!',
                         data: user
                    })
               })
               .catch(error => {
                    res.status(500).json({
                         message: 'Error occurred while registering',
                         error: error
                    })
               })
     } else {
          res.status(400).json({
               message: "Username and Password not found"
          })
     }
})

//LOGIN
router.post('/login', (req, res) => {
     const { username, password } = req.body
     if(isValid(req.body)) {
          Users.findBy({ username: username })
               .then(([user]) => {
                    //compare the password the hash stored in the database
                    console.log('user', user)
                    if(user && bcryptjs.compareSync(password, user.password)){
                         const token = createToken(user)
                         res.status(200).json({
                              token,
                              message: `Welcome, ${user.username}`,
                         })
                    } else {
                         res.status(401).json({
                              message: 'Invalid login credentials'
                         })
                    }
               })
               .catch(err => {
                    res.status(500).json({
                         error: err,
                         message: 'Error occurred during login'
                    })
               })
     } else {
          res.status(400).json({
               message: "Provide Username and Password"
          })
     }
})

//Create Token middleware
function createToken(user){
     const payload = {
          subject: user.id,
          username: user.username,
          department_name: user.department_name
     }
}

module.exports = router