'use strict'
var express=require('express'),
    bodyParser=require('body-parser'),
    app=express();


//app
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).send({"warren":"aroni"});
});
console.log("ssss");
module.exports=app;