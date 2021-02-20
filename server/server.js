const express = require('express')
const app = express()
const port = 4000

app.get('/getuser', (req, res) => {
  res.send('me user!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})