/**
 * @author 田宇齐
 * @date 2020/8/21 13:54
 * @FilePath: \vue-cli3-project\src\utils\mallMixin.js
 * @Description:混入组件
 */
import BackTop from '@components/content/backtop/BackTop'


export const iMallMixin={

  components:{
    BackTop
  },
  data(){
    return{
      //控制返回按钮的隐藏显示
      viewbacktop:false,
    }
  },
  methods:{
    backtop(){
      this.$refs.scroller._scrollBackTo(0,0)
    },
  }

}
