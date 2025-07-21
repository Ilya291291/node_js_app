const express = require('express')
const {default: fetch} = require('node-fetch')

const app = express()

const NAME_SERVICE_HOST = process.env.NAME_SERVICE_HOST || 'http://localhost:3005'

app.get('/', (req, res) => {
    fetch(NAME_SERVICE_HOST)
    .then(result => result.json())
    .then(data => {
        res.send(`Hello Ilya, from server current date is ${data}\n`)
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})