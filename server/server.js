const express = require('express');
const mongoose = require('mongoose');
// 链接mongo
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
});

const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String, require: true},
    age:{type:Number, require: true}
}));
// User.create({
//     user:'imooc1',
//     age:19
// }, function (err, doc) {
//     if(!err) console.log(doc)
//     else console.log(err)
// })

// 删除age=18的项
// User.remove({age:18},function (err,doc) {
//     console.log(doc)
// })

User.update({'user':'imooc1'},{'$set':{age: 26}}, function (err, doc) {
    console.log(doc)
})


// 新建app
const app = express();

app.get('/',function (req, res) {
    res.send('<h1>123</h1>')
});

app.get('/data',function (req, res) {
    User.findOne({user:'xiaoming'}, function (err, doc) {
       res.json(doc)
    });
    // res.json({name:'imooc',type:'123'})
});
//findOne 返回对象
//find 返回数组


// app.get()


app.listen(9093, function () {
    console.log('node app start at port 9093')
});