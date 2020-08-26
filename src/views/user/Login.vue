<template>
      <div class="login-main">
        <!--登录header-->
        <nav-bar class="login-top">
          <div slot="left">
            <img src="~@assets/imgs/common/back.svg"/>
          </div>
          <div slot="center">登录</div>
        </nav-bar>
        <!--content-->
        <div class="login-content">
            <!--<div>-->
              <!--<img src="~@assets/imgs/profile/avatar.svg"/>-->
            <!--</div>-->
          <div class="login-user">
            <label>👤 用户名:</label>
            <input type="text" v-model="userName" placeholder="请输入帐户名 / TTTyuqi"/>
          </div>
          <div class="login-psdw">
            <label>🔒 输入密码:</label>
            <input type="password" v-model="userPswd" placeholder="密码 / 756683214"/>
          </div>

          <div class="submit" @click="submitClick">Login</div>

        </div>
      </div>
</template>

<script>
  import NavBar from '@components/common/navbar/NavBar'

  import {mapActions} from 'vuex'
    export default {
        name: "Login",
        components:{
          NavBar,
        },
        data(){
          return{
            userName:'',
            userPswd:''
          }
        },
        methods:{
          ...mapActions(['Login']),

          submitClick(){
            // this.$store.dispatch('Login',{userName:this.userName,userPswd:this.userPswd})
            this.Login({userName:this.userName,userPswd:this.userPswd}).then((res) => {
                this.$toast.showMessage(res)
                this.$router.push('/home')
            })
          }
        }

    }
</script>

<style scoped>
.login-top{
  background-color: silver;
  color: ghostwhite;
}
  .login-content{
    /*height: calc(100vh - 44px);*/
    background-color: #fff;
    border-radius: 0.2rem;
    width: 60%;
    margin: 50% auto;
    text-align: center;
    padding: 30px 25px;
    /*display: flex;*/
    background-color: rgba(0,0,0,0.3);
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
    /*background-color: #fff;*/
  }
  .login-user,.login-psdw{

    border-radius: 0.2rem;
    /*display: flex;*/
  }
  input{
      /*flex: 1;*/
      width: 100%;
      height: 2rem;
      padding-left: 0.5rem;
      border: none;
      outline: none;
      border-radius: 0.2rem;
    }
.submit {
  margin-top: 0.8rem;
  height: 2.5rem;
  background-color: royalblue;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
}
</style>
