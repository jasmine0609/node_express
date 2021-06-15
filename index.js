const express = require('express')
const app = express()
const port = 5000

const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://choing:as1234@cluster0.knwng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongDB Connected...'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})