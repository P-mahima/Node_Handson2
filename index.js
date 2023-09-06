const express = require('express')
const expressapi = express()
const cors = require('cors')
expressapi.use(cors(
    {
        origin : '*'
    }
))

expressapi.use(express.json())

expressapi.get('/home' , (request, response) => {
    response.send('<html><body><h1>Welcome to Express</h1></body></html>')
})
expressapi.get('/api/main' , (request, response) => {
    response.send({
        "What is NodeJS":"A common task for a web server can be to open a file on the server and return the content to the client.",
        "What is express" : "Express is a node js web application framework that provides broad features for building web and mobile applications."
        
    })
})
expressapi.get('/' , (request, response) => {
    response.send('<html><body><h1>NodeJS Handson2</h1></body></html>')
})

expressapi.listen(3004, () => {
    console.log('server is live in port 3004')
})