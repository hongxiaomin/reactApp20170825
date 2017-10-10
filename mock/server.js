let bodyParser=require('body-parser');
let express=require('express');
let app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({extended:true}));
let ad=require('./home/ad');
app.get('/api/ad',(req,res)=>{
    res.send(ad);
});
let list=require('./home/list');
//获取列表 需要传递城市
app.get('/api/list/:city/:page',(req,res)=>{
    res.send(list);
});
let info=require('./detail/info');
app.get('/api/detail/info/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(info);
});

let comments=require('./detail/comment');
app.get('/api/detail/comments/:id/:page',(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.page);
    res.send(comments)
});

let orderList=require('./orderlist/orderList');
app.get('/api/orderlist/:username',(req,res)=>{
    res.send(orderList);
});

let searchList=require('./search/list');
app.get('/api/searchlist',(req,res)=>{
    res.send(searchList);
});

app.post('/api/comment',(req,res)=>{
   console.log(req.body);
   if(req.body.id&&req.body.comment){
       res.send({msg:'ok'});
   }
});
let searchResult=require('./search/list');
app.get('/api/search/:kind/:keyword?/:page',(req,res)=>{
    res.send(searchResult);
});


