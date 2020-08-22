<template>
    <div ref="warpper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

//导入better-scroll
import BetterScroll from 'better-scroll'

export default {
    name:"ScrollBar",
    props:{
         /** probeType ==》 侦测
          * 0 1 滚动时候监听scroll事件，不侦测实时位置
          * 2   在滚动过程中监听scroll事件，侦测实时位置；惯性滚动时不侦测位置
          * 3    时时监听scroll事件，时时侦测位置
          */  
         probeType:{
             type:Number,
             require:false,
             default:1
         } ,
         /**
          * 是否启动在scroll包裹中Dom的点击事件
          */
         click:{
             type:Boolean,
             require:false,
             default:true
         },
         /**
         * 是否派发滚动事件
         */
         listenScroll: {
            type: Boolean,
            require:false,
            default: false
         },
         /**
         * 是否派发滚动到底部的事件，用于上拉加载
         */
         pullup: {
            type: Boolean,
            require:false,
            default: false
         },
         /**
          * 是否派发顶部下拉的事件，用于下拉刷新
          */
         pulldown: {
            type: Boolean,
            default: false
         },
         /**
          * 是否派发列表滚动开始的事件
          */
         beforeScroll: {
            type: Boolean,
            default: true
         },
    },
    mounted(){
        // 保证在DOM渲染完毕后初始化better-scroll
        setTimeout(() => {
            this._initScroll()
        },100)
    },
    methods:{
        _initScroll(){
            if(!this.$refs.warpper)return
            //better-scroll初始化
            this.scroll = new BetterScroll(this.$refs.warpper,{
                probeType:this.probeType,
                click:this.click
            })
             //是否监听滚动事件
             if(this.listenScroll){
                this.scroll.on('scroll',(position) => {
                    // console.log("====",position)
                    this.$emit('scrolling',position)
                })
             } 
             //是否启动下拉加载更多
             if(this.pullup){
                 this.scroll.on('scrollEnd',(position) => {
                   // console.log("====",position)
                     // 滚动到底部
                     if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                        this.$emit('scrollToEnd')
                     }
                 })
             }
             // 是否派发顶部下拉事件，用于下拉刷新
             if (this.pulldown) {
                 this.scroll.on('touchend', (pos) => {
                     // 下拉动作
                    if (pos.y > 50) {
                        this.$emit('pulldown')
                    }
                })
             }

             // 是否派发列表滚动开始的事件
             if (this.beforeScroll) {
                 this.scroll.on('beforeScrollStart', (res) => {
                //    console.log("====",res)
                  this._refresh()
                 // this.$emit('beforeScroll')
                })
              }
        },
        //回到顶部的方法
        _scrollBackTo(x,y,time=200){
          this.scroll && this.scroll.scrollTo(x,y,time)
        },
        //刷新scroll重新计算
        _refresh() {
          // 代理better-scroll的refresh方法
          this.scroll && this.scroll.refresh()
          // console.log("===")
        },
        //获取y的坐标点
        _getScrollY(){
          return this.scroll?this.scroll.y:0
        }
       

    }

}
</script>
<style scoped>
</style>
