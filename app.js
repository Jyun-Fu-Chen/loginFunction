const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const PORT = 3000
const routes = require('./routes')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.engine('hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.use(routes)



app.listen(PORT, () => {
  console.log(`localhost:${PORT} is running`)
})
