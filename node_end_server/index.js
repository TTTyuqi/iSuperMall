const express = require('express')

const app = express();
//将跨域模块引用进来
app.use(require('cors')())
//将请求的参数转换为json格式
app.use(express.json())
require('./router/webApi')(app)
app.listen(3000,() => {
    console.log("http://localhost:3000/已启动")
})