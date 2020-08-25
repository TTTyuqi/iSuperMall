<template>
    <div>
      <!--top-->
      <nav-bar class="category-style">
          <div slot="center">商品分类</div>
      </nav-bar>
      <!--content-->
      <div class="category-content">
        <div class="category-left">
          <!--使用baetter-scorll-->
          <scroll-bar
            class="swapper"
          >
            <catogory-left-title :categorytitle="categorytitle" @maitKey="maitKey"/>
          </scroll-bar>

        </div>
        <div class="category-right">
          <scroll-bar
            class="swapper"
          >
            <category-right-content :categorylist="categorylist" />
          </scroll-bar>
        </div>
      </div>
    </div>
</template>

<script>
  import CatogoryLeftTitle from './categorychilren/CatogoryLeftTitle'
  import CategoryRightContent from './categorychilren/CategoryRightContent'
  import NavBar from '@components/common/navbar/NavBar'
  import ScrollBar from '@components/common/scroll/ScrollBar'

  import {getCategoryTitle,getCategoryContent} from "@api/category";

  export default {
        name: "Category",
        components:{
          CatogoryLeftTitle,
          CategoryRightContent,
          NavBar,
          ScrollBar
        },
        data(){
            return{
              categorytitle:[],
              cruuentmaitKey:3627,
              categorylist:[]
            }
        },
        created(){
          //获取分类标题
          this.CategoryTitle()

          //按需获取分类页content
          this.CategoryContent()

        },
        methods:{
          CategoryTitle(){
            getCategoryTitle().then(res => {
              console.log("CategoryTitle",res.data.category.list)
              this.categorytitle=res.data.category.list
            })
          },
          CategoryContent(){
            getCategoryContent({maitKey:this.cruuentmaitKey}).then(res =>{
              this.categorylist= res.data.list
            })
          },
          maitKey(categoryKey){
            // console.log("categoryKey",categoryKey)
            getCategoryContent({maitKey:categoryKey}).then(res =>{
              this.categorylist= res.data.list
            })
          }


        }
    }
</script>

<style scoped>
  .category-style{
    background-color: silver;
    color: ghostwhite;
  }
  .category-content{
    display: flex;
  }
  .category-left{
    width: 25%;
    padding: 1px;
  }
  .category-right{
    padding: 1px;
    width: 75%;
  }
  .swapper{
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>
