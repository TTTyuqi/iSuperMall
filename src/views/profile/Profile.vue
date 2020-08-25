<template>
    <div>
      <!--top-->
        <nav-bar class="profile-style">
          <div slot="center">我的信息</div>
        </nav-bar>
        <scroll-bar
          class="swapper"
          :beforeScroll="false"
        >
          <pro-file-main/>
          <profile-money/>
          <profile-content/>
          <profile-footer/>
        </scroll-bar>
    </div>
</template>

<script>
  import NavBar from '@components/common/navbar/NavBar'
  import ScrollBar from '@components/common/scroll/ScrollBar'
  import ProFileMain from './profilechilreninfo/ProFileMain'
  import ProfileMoney from './profilechilreninfo/ProfileMoney'
  import ProfileContent from './profilechilreninfo/ProfileContent'
  import ProfileFooter from './profilechilreninfo/ProfileFooter'
    export default {
        name: "Profile",
        components: {
          NavBar,
          ScrollBar,
          ProFileMain,
          ProfileMoney,
          ProfileContent,
          ProfileFooter
        }
    }
 
</script>

<style scoped>
   .profile-style{
     background-color: silver;
     color: ghostwhite;
   }
    .swapper{
        height: calc(100vh - 93px);
        overflow: hidden;
         padding: 1px 0;
    }
</style>
