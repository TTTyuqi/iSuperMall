<template>
    <nav-bar>
        <div slot="left" class="back" @click="backClick"><img src="~@assets/imgs/common/back.svg"/></div>
        <div slot="center" class="detail-center">
          <div v-for="(item,index) in title" class="item-title" :class="{'active-item':currentitleindex === index}" @click="itemclick(index)">{{item}}</div>
        </div>
    </nav-bar>
</template>

<script>
  import NavBar from '@components/common/navbar/NavBar'
    export default {
        name: "DetailTopBar",
        components:{
          NavBar
        },
        data(){
          return{
            title:['商品','参数','评论','推荐'],
            currentitleindex:0
          }
        },
        methods:{
          itemclick(index){
            this.currentitleindex = index
          },
          backClick(){
            this.$router.back()
            // 等价于 this.$router.go(-1)
          }

        }
    }
</script>

<style scoped>
    .detail-center{
      display: flex;
      align-items: center;
      font-size: 13px;
      color: darkgrey;
    }
    .item-title{
      flex: 1;
    }
    .back img{
      margin-top: 4px;
    }
    .active-item{
      color:rgba(69,69,69,.9);
    }

</style>
