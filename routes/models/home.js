const express = require('express')
const router = express.Router()
const Users = require('../../models/userList')


router.get('/', (req, res) => {
  return res.render('home')
})
router.get('/login', (req, res) => {
  return res.render('login')
})
router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  console.log(email)
  console.log(password)
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].email === email && Users[i].password === password) {
      return res.render('login', { user: Users[i] })
    }
  }
  return res.redirect('/')
})

module.exports = router
