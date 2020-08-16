<template>
    <div>
        <nav-bar class="bagcolor">
            <div slot="center">商城</div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar'
    export default {
        name: "Home",
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .bagcolor{
        background-color: silver;
        color: ghostwhite;
    }
</style>
