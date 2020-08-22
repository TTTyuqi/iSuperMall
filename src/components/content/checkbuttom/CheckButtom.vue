<template>
    <div class="check-buttom" @click="isChecked">
         <img src='~@assets/imgs/icon/sure.svg' :style="{'background-color':isactive?'#333':'#999'}"/>
    </div>
</template>

<script>
export default {
    name:'CheckButtom',
    props:{
        isactive:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        isChecked(){
            this.$emit('ischecked',this.isactive)
        }
    }
}
</script>
<style scoped>
    .check-buttom{
        padding: 0 5px;   
    }
    .check-buttom img{
       width: 27px;
        border-radius: 50%;
        /* background: #333; */
    }
</style>