const express=require('express');
const hbs=require ('hbs');
var favicon = require('serve-favicon')
const app=express();
const port=process.env.port || 8088;
const stylus = require('stylus');
app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials')
app.use(stylus.middleware(
  { src: __dirname + '/public'
 
  }
))
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials')
app.get('/',(req,res)=>{

    res.render("home.hbs");
   console.log(__dirname);
});


app.listen(port,function(){
    console.log('server up ',port);
});