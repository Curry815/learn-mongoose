// 1.导入mongoose
const mongoose = require('mongoose');

// 2.连接 mongoose 服务 , 27017 是默认端口 , bilibili 是数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 3.设置回调
// 设置成功的回调 once 回调函数只执行一次
mongoose.connection.once('open', () => {
    // 4.创建文档的结构对象
    // 设置文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
    });

    // 5.创建模型对象，对文档操作的封装对象
    let BookModel = mongoose.model('Book', BookSchema);

    // 6.新增
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

}); 

// 设置失败的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
}); 

// 设置关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
}); 