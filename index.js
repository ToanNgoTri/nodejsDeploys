const express = require('express')
const app = express()
const data = require('./data')

app.listen( process.env.PORT || 3000, () => {
    console.log("App listening on port 3000");
});


app.get('/', (req,res) => {
    res.send(process.env)
})

app.get('/data', (req,res) => {
    res.json(data)
})
