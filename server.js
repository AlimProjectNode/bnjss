const  app=require('./app');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;


app.listen(port,()=>{
    console.log("servidoer creado");
});