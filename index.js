const express = require('express');
const app = express();

app.get('/',(res,req)=>{
  const time = new Date();
  req.send(time)
})

app.listen("8000",()=>{
  console.log("staring")
})