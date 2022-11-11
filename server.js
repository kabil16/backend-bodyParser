const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/html/index.html")
});
app.post("/data",(req,res)=>{
    res.send("data hitting")
    console.log(req.body);
    
});

app.listen(port,()=>{
    console.log("Server has been started");
})