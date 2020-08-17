<template>
  <div class="my-swiper">
    <div class="swiper" style="display: flex" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1 ">
        <div class="indicator-item" v-for="(item,index) in slideCount" :class="[index === currenIndex-1?'active':'']"></div>
      </slot>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Swiper",
      props:{
        //多久滚动一张图片
        interval: {
          type: Number,
          default: 2000
        },
        //轮播的过渡速度
        animDuration: {
          type: Number,
          default: 300
        },
        //移动到图片的多少比例换图
        moveRatio: {
          type: Number,
          default: 0.25
        },
        //是否显示轮播图指示器
        showIndicator: {
          type: Boolean,
          default: true
        }
      },
      data(){
        return{
          currenIndex:1,//设置当前位置
          slideCount: 0, // 轮播图元素个数
          totalWidth: 0, // swiper的宽度
          swiperStyle: {}, // swiper样式
          scrolling: false, // 是否正在滚动
        }
      },

      // created:html加载完成之前，执行。执行顺序：父组件-子组件
      // mounted:html加载完成后执行。执行顺序：子组件-父组件
      // methods：事件方法执行
      // watch：watch是去监听一个值的变化，然后执行相对应的函数。
      // computed：computed是计算属性，也就是依赖其它的属性计算所得出最后的值
      mounted(){
        setTimeout(() => {
          this.handleDom()
          // 2.开启定时器
          this.startTimer();
        },100)

      },
      methods:{
        /**
         * 定时器操作
         */
        startTimer(){
          this.playTimer = setInterval(() => {
            this.currenIndex++
            this.scollerCurrect(-this.currenIndex*this.totalWidth)
          },this.interval)
        },
        stopTimer(){
          clearInterval(this.playTimer);
        },
        /**
         * @author 田宇齐
         * @date 2020/8/17 14:26
         * @FilePath: \vue-cli3-project\src\utils\Home.vue
         * @Description: 操作DOM 在DOM前后添加Slide
         */
        handleDom(){
          // 1.获取要操作的元素
          let swiperEl = document.querySelector('.swiper');
          let slidesEls = swiperEl.getElementsByClassName('slide');

          // 2.保存个数
          this.slideCount = slidesEls.length;

          //3.如果大于1个, 那么在前后分别添加一个slide
          if (this.slideCount > 1) {
            //克隆第一个slide元素
            let firestSlideEl = slidesEls[0].cloneNode(true)
            //克隆最后一个slide元素
            let lastSlideEl = slidesEls[this.slideCount - 1].cloneNode(true)
            //向dom中前面添加一个slide--克隆的最后一个slide元素
            swiperEl.insertBefore(lastSlideEl,slidesEls[0])
            //先dom中后面再添加一个slide -- 克隆的第一个slide元素
            swiperEl.appendChild(firestSlideEl)

            this.totalWidth = swiperEl.offsetWidth;
            this.swiperStyle = swiperEl.style;
            // console.log("++++++",swiperEl.style)
          }

          // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
          this.setTransform(-this.totalWidth);

        },

        /**
         * 设置滚动的位置
         */
        setTransform(position) {
          this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
          this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`; /* Safari 和 Chrome */
          this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;/* IE 9 */
        },

        /**
         * 滚动到正确的位置
         */
        scollerCurrect(ContentPosition){
          this.scrolling= true
          //1.设置滚动的过渡动画
          this.swiperStyle.transition = 'transform '+this.animDuration+'ms'
          this.setTransform(ContentPosition)

          //2.判断滚动的位置
          this.checkScollerPostion()

          this.scrolling=false
        },

        /**
         * 滚动的位置
         */
        checkScollerPostion(){
          setTimeout(() => {
            this.swiperStyle.transition = 'transform 0ms'
            if (this.currenIndex >= this.slideCount+1) {
              this.currenIndex = 1
              this.setTransform(-this.currenIndex*this.totalWidth)
            }
          },this.animDuration)

        },

        /**
         * 拖动事件的处理
         */
        touchStart(e){
          // 1.如果正在滚动, 不可以拖动
          if (this.scrolling) return;

          // 2.停止定时器
          this.stopTimer();

          // 3.保存开始滚动的位置
          this.startX = e.touches[0].pageX;
        },

        touchMove(e) {
          // 1.计算出用户拖动的距离
          this.currentX = e.touches[0].pageX;
          this.distance = this.currentX - this.startX;
          let currentPosition = -this.currenIndex * this.totalWidth;
          let moveDistance = this.distance + currentPosition;

          // 2.设置当前的位置
          this.setTransform(moveDistance);
        },

        touchEnd(e) {
          // 1.获取移动的距离
          let currentMove = Math.abs(this.distance);

          // 2.判断最终的距离
          if (this.distance === 0) {
            return
          } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右边移动超过0.5
            this.currenIndex--
          } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移动超过0.5
            this.currenIndex++
          }

          // 3.移动到正确的位置
          this.scollerCurrect(-this.currentIndex * this.totalWidth);

          // 4.移动完成后重新开启定时器
          this.startTimer();
        },

        /**
         * 控制上一个, 下一个
         */
        previous: function () {
          this.changeItem(-1);
        },

        next: function () {
          this.changeItem(1);
        },

        changeItem: function (num) {
          // 1.移除定时器
          this.stopTimer();

          // 2.修改index和位置
          this.currentIndex += num;
          this.scrollContent(-this.currentIndex * this.totalWidth);

          // 3.添加定时器
          this.startTimer();
        }


      }
    }
</script>

<style scoped>
  .my-swiper{
    overflow: hidden;
    position: relative;
  }

  .indicator{
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 8px;
  }
  .indicator-item{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: darkgrey;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }
  .indicator-item.active {
    background-color: rgba(63,62,46,07);
  }

</style>
