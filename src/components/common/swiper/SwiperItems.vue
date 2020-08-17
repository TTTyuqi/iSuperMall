<template>
  <div class="slide" style="width: 100%;flex-shrink:0">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "SwiperItems"
    }
</script>

<style scoped>
  .slide img{
    width: 100%;
  }

</style>
