const express = require('express');
const app = express();
const cors = require('cors')
const cotegories = require('./Data/cetagories.json')
const port = 5000;
app.use(cors())
app.get('/', (req, res) => {
    res.send('news api')
})
app.get('/news-cetagories', (req, res) => {
    res.send(cotegories)
})
app.listen(port, () => {
    console.log(`Dragon News Server running ${port}`)
})