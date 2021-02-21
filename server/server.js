const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const app = express()
const port = process.env.PORT
app.use(cors())
app.get('/createRoom', (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer b2cdec99c50a6846b778a2eb88f9cf4fd9a71cab07587a43771345911a730b43'
    },
    body: '{"properties":{"enable_chat":true}}'
  };
  
  fetch('https://api.daily.co/v1/rooms', options)
  .then(response => response.json())
  .then(api_res => res.send(api_res.url))
  .catch(err => console.error(err));
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})