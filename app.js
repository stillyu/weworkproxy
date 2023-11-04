const express = require('express')
const proxy = require('express-http-proxy');

const app = express()
const port = 9000

app.get('/health', (req, res) => {
  res.send('ok!')
})

app.use('/', proxy('https://qyapi.weixin.qq.com'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})