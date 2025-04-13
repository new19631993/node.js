const express=require('express');
const port=4000;
const app=express();
app.get('/',(req,res)=>res.send('<h1>helloa<h1>'));
app.listen(port,()=>console.log('app: ${port}'));
