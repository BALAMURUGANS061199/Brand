const express = require('express')
const mongoose = require('mongoose')
const route = require('./view/Route')
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json());
app.use('/Api',route)


app.use('/',(req,res)=>{
    return res.json({message:"Welcome to NodeJS and MongoDB"})
})


app.listen(PORT,()=>{
    console.log(`Server Running PORT ${PORT} `);
})

mongoose.connect(process.env.Mongo_URL).then(()=>{
    console.log('DB Connected');
})