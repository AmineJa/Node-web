const express=require('express');
const hbs=require ('hbs');
const app=express();
const stylus = require('stylus');
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


app.listen(8088,function(){
    console.log("server up");
});