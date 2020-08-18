<template>
  <div class="tab-control">
    <div class="item-control" v-for="(item,index) in titles" @click="itemClick(index)">
      <div :class="[index === currentIndex?'active':'']">{{item}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
          titles:{
            type:Array,
            require: true,
            default:() =>{
              return []
            }
          }
        },
        data(){
          return{
            currentIndex:0
          }
        },
      methods:{
        itemClick(index){
          this.currentIndex = index
          this.$emit('changtabcontrol',index)
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    height: 40px;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    color: darkgrey;
    background-color: white;
  }
  .active{
    color:rgba(69,69,69,.9);
    padding-bottom: 4px;
    border-bottom: 3px solid rgba(69,69,69,.9);
  }

</style>
