const express = require('express')
const ViteExpress = require('vite-express')

const app = express()

const port = process.env.PORT || 3000

app.get('/maeco/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(__dirname + '/index.html')
})

ViteExpress.listen(app, port, () => console.log('Server is listening...'))
