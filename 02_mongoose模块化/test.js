const db = require('./db/db');
const MovieModel = require('./models/MovieModel');

db(() => {
    // 电影的模型对象
    MovieModel.create({
        title: '你好，李焕英',
        director: '贾玲'
    }).then((data, err) => {
        if (err) {
            console.log('插入失败');
            return;
        }
        console.log('插入成功');
    })
});