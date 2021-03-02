const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events', async (req,res)=>{
    const {type, data} = req.body
    
    if (type === 'CommentCreated'){ 
        // console.log(data.content)
        const status = data.content.includes('jengjet') ? 'approved' : 'rejected'

        await axios.post('http://event-bus-srv:4009/events', {
            type: "CommentModerated",
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }

    res.send({})
})

app.listen(4003, () => {
    console.log("Listening on port 4003, Moderation service")
})