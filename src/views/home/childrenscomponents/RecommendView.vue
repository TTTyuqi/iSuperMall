<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
            <a :href="item.link" ><img :src="item.image"/></a>
            <div>{{item.title}}</div>
        </div>
    </div>
    
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommend:{
            type:Array,
            required:true,
            default:() =>{
                return []
            }
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style>
    .recommend{
        display: flex;
        justify-content: space-around;
        text-align: center;
        font-size: 12px;
        padding: 10px 4px 28px 4px;
        border-bottom: 10px solid rgba(169, 169, 169,.2);
    }
    .recommend-item img{
        width: 85px;
        height: 85px;
        margin-bottom: 8px;
    }
</style>