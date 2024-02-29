const express = require('express')
const app = express()
const data = require('./data');
var cors = require('cors');
app.use(cors())

app.listen( process.env.PORT || 3000, () => {
    console.log("App listening on port 3000");
});


app.get('/', (req,res) => {
    res.send(data)
})

app.get('/env', (req,res) => {
    res.json(process.env)
})
