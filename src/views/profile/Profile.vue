<template>
    <div>
        <scroll-bar
          ref="scroller"
          class="swapper"
          :beforeScroll="false"
        >
        <ul>
            <li>11</li>
        </ul>
        </scroll-bar>
    </div>
</template>

<script>

  import ScrollBar from '@components/common/scroll/ScrollBar'
    export default {
        name: "Profile",
        components: {
        ScrollBar
        }
    }
 
</script>

<style scoped>
    .swapper{
        height: calc(100vh - 93px);
        overflow: hidden;
       
    }
</style>
