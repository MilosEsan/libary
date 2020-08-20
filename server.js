const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//servs files from dist dir
app.use('/', serveStatic(path.join(__dirname, '/dist')))


const port = process.env.PORT || 8080
app.listen(port)

console.log(`listening on ${port}`)
