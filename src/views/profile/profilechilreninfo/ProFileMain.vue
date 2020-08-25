<template>
    <div class="profile-head">
        <div class="user-avatar">
          <img src="~@assets/imgs/profile/avatar.svg"/>
        </div>
        <div class="user-info">
            <div class="loging-out">
              <span>登录/注册</span>
            </div>
            <div class="detail">
              <img src="~@assets/imgs/profile/phonesel.png"/>
              <span>暂无绑定手机号</span>
            </div>
        </div>
        <div class="uer-more">
          <img src="~@assets/imgs/profile/right_arrow.svg"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProFileMain"
    }
</script>

<style scoped>
    .profile-head{
      background-color: silver;
      color: ghostwhite;
      display: flex;
      align-items: center;
      padding: 5px;
    }
    .user-avatar{
      padding: 5px 8px;
    }
    .loging-out{
      padding: 0 0 3px 3px;
    }
    .profile-head .user-info{
      flex-grow: 1;
    }
    .detail{
      display: flex;
      align-items: center;
    }
    .user-info .detail img{
      width: 20px;
      height: 20px;

    }
    .user-info .detail span{
        font-size: 14px;

    }
    .profile-head .uer-more{
      justify-self: flex-end;
    }
    .uer-more img{
      width: 30px;
      height: 30px;
    }
    .user-avatar img{
      border-radius: 50%;
        width: 65px;
        height: 65px;
    }
</style>
