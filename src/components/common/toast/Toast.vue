<template>
    <div class="toast-style" v-show="isshow">
        <div class="toast-font"> {{message}}</div>   
    </div>
</template>

<script>
export default {
    name:"Toast",
    data(){
        return{
          message:"默认信息",
          isshow:false
        }
    },
    methods: {
        showMessage(message,timeOut=200){
            this.message = message
            this.isshow = true
            setTimeout(() => {
            this.message = '默认信息'
            this.isshow = false
            },timeOut)

        }
    }
}
</script>

<style scoped>
    .toast-style{
        position:fixed;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        background-color:rgba(33, 33, 33, .8) ;
        border-radius: 4px;
        z-index: 999;
    }
    .toast-font{
        padding: 4px 10px;
        line-height: 35px;
        font-size: 14px;
        font-weight: 600;
         color: ghostwhite;
    }

</style>