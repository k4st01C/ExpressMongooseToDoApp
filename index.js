const express = require('express');
const app = express();
const todoRoutes=require('./routes/todos.js')

app.get('/',(req,res)=>{
    res.sendFile("index.html")
})

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/todos',todoRoutes)



app.listen('3000', () => console.log('starting...'));
