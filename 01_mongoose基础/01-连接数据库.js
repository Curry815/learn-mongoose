// 导入mongoose
const mongoose = require('mongoose');

// 连接 mongoose 服务 , 27017 是默认端口 , bilibili 是数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调 once 回调函数只执行一次
// 设置成功的回调
mongoose.connection.once('open', () => {
    console.log('连接成功');
}); 

// 设置失败的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
}); 

// 设置关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
}); 

// 测试关闭连接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 2000);