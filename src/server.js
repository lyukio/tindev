const express = require('express')

const server = express()


server.get("/", (req, res) => {
    return res.json({HW: "Hello"})
})

server.listen(3333)