<template>
    <div class="nar-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>

export default {
    name:'NavBar',

}
</script>
<style>
    .nar-bar{
        display: flex;
        height: 44px;
        text-align: center;
        align-items: center;
        /*box-shadow: 0 1px 1px rgba(50, 50, 50, .2);*/
      box-shadow: 0 0.04rem 0.4rem gray;

    }
     .left{
       width: 60px;
       
     }
     .right{
        width: 60px;
        
     }
     .center{
         flex: 1;
     }
</style>
