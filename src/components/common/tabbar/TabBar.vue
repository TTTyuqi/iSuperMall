<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

    export default {
      name: "TabBar",
      components:{
      }
    }
</script>

<style scoped>
  .tab-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f6f6f6;
    height: 49px;
    /*box-shadow: 0 -1px 1px rgba(50,50,50,.1);*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -0.04rem 0.4rem gray;
  }

</style>
