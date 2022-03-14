const express = require('express')
const router = express.Router()
const Users = require('../../models/userList')
const cookieParser = require('cookie-parser')
router.use(cookieParser())


router.get('/', (req, res) => {
  if(req.cookies.username === '001'){
    return res.render('login')
  }
  return res.render('home')
})
router.get('/login', (req, res) => {
  return res.render('login')
})
router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  for (let i = 0; i < Users.length; i++) {
    if (Users[i].email === email && Users[i].password === password) {
      res.cookie('username', '001')
      return res.render('login', { user: Users[i] })
    }
  }
  return res.redirect('/')
})

module.exports = router
