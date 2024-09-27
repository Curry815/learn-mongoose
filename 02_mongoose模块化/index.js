// 导入 db 文件
const db = require('./db/db');
// 导入mongoose
const mongoose = require('mongoose');
// 导入 BookModel
const BookModel = require('./models/BookModel');

db(() => {
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 20
    }).then((err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
},() => {
    console.log('连接失败');
});


