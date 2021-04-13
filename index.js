const express = require('express');
const app = express();
const todoRoutes=require('./routes/todos.js')

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/todos',todoRoutes);
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})




app.listen('3000', () => console.log('starting...'));
