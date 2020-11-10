const express = require('express')
const {Posts, migrate} = require('./models')
var cors = require('cors')

const port = 3030

var app = express()
app.use(cors())

migrate()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/AllPosts', async (req, res) => {
    try{
        const allPosts = await Posts.findAll();
        res.send(allPosts)
    }
    catch(error){
        res.send(JSON.parse(`{
            "error":"failure"
        }`))
    }
})

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`)
})