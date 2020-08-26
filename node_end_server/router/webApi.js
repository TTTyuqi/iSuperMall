module.exports=(app) => {
    const bcrypt = require("bcrypt")
    const md5pwd = bcrypt.hashSync('756683214',10)
    //返回token 我们需要用到一个jsonwebtoken模块,比较流行做web token验证的;npm install jsonwebtoken
    const jwt = require('jsonwebtoken')
    //模拟登陆接口
    app.post('/login',async (req,res) => {
        //获取前段请求的参数，使用ES6的结构赋值
        const {userName,userPswd} = req.body
        //验证密码,后台数据库对用户的密码使用bcrypt进行了加密
        const isTure = bcrypt.compareSync(userPswd,md5pwd)
        //使用这个模块中sign方法，生成一个token，一个参数为生成token的源数据，第二参数为生成token的密钥
        if (isTure) {
            const tocken = jwt.sign({id:userName},'secret')
            res.send({
                success:true,
                tocken,
                username:userName,
                imgaddress:'',
                message:'登陆成功'
            })
        }else {
            res.send({
                success:false,
                message:'登陆失败'
            })
        }

    })

}