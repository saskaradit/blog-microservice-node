const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post("/events", (req,res)=>{
    const event = req.body;

    axios.post('http://localhost:3000/events', event)
    axios.post('http://localhost:3001/events', event)
    axios.post('http://localhost:3002/events', event)

    res.send({status: 'OK'})
})

app.listen(3009, () =>{
    console.log("listening on port 3009")
})