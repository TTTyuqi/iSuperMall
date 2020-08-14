<template>
  <div class="tab-item" @click="showpage">
    <div v-if="!active"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isactie"><slot name="item"></slot></div>

  </div>

</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        cruntPath:{
          type: String,
          required: false,
        },
        activecolor:{
          type: String,
          required: false,
          default:'#ff5777'
        }
      },
      data(){
          return {
            // active:false
          }
      },
      computed:{
        active(){
          return this.$route.path === this.cruntPath
        },
        isactie(){
          return !this.active? {color:this.activecolor}:{}
        }

      },
      methods:{
        showpage(){
          this.$router.replace(this.cruntPath)
        }
      },
    }
</script>

<style scoped>
  .tab-item{
    text-align: center;
    font-size: 14px;
  }
  .tab-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
