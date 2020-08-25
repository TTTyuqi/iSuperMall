<template>
  <div >
    <div class="left-item"
         v-for="(item,index) in categorytitle"
         :key="item.maitKey"
         @click="activeTitle(index,item.maitKey)"
         :class="{activetitle:currentitleindex == index}">
        {{item.title}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "CatogoryLeftTitle",
        props:{
          categorytitle:{
            type:Array,
            require:true,
            default: () => []
          }
        },
        data(){
          return{
            currentitleindex:0
          }
        },
        methods:{
          activeTitle(index,cruuentmaitKey){
            this.currentitleindex=index
            // console.log("+++",cruuentmaitKey)
            this.$emit("maitKey",cruuentmaitKey)
          }
        }
    }
</script>

<style scoped>
    .left-item{
      background-color: rgba(200,200,200,.3);
      color: #888;
      height: 45px;
      text-align: center;
      line-height: 45px;
      font-size: 15px;
      border-radius: 1px;
      border-left: 2px solid transparent;
    }
  .activetitle{
    background-color: whitesmoke;
    color: #333;
    font-weight: 600;
    border-left: 2px solid #333;
  }
</style>
