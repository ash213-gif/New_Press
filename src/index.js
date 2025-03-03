const express=require('express')
const mongoose=require('mongoose')
const routes=require('./routes/routes')
require('dotenv').config()

const app= express()
app.use(express.json())
const port=3000;

mongoose.connect(process.env.mongoURL)
.then(()=>{ console.log('mongoDB is coonected');})
.catch((e)=>{console.log(e);})

app.use('/', routes )

app.listen(port,(console.log(`the server is running on ${port}`)))