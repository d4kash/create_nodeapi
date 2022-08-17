const express = require('express');
const cors = require('cors');
const app  = express();
app.use(cors());
const port = process.env.PORT ||3000;
const jsonData = require("./courses.json");
app.get("/",(req,res)=>{
   res.send("I'm working");
});
app.get("/course",(req,res)=>{
   res.send(jsonData);
});
app.listen(port,()=>{
   console.log("Live");
});
