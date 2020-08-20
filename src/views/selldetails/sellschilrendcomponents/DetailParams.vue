<template>
    <div class="detail-parames" v-if="Object.keys(paramesinfo).length !== 0">
      <div class="rule-key">{{paramesinfo.rulekey}}</div>
      <table v-for="(table, index) in paramesinfo.rule"
             class="info-size" :key="index">
        <tr v-for="(tr, indey) in table" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
        </tr>
      </table>
      <div class="rule-key">{{paramesinfo.infoskey}}</div>
      <table class="info-param">
        <tr v-for="(info, index) in paramesinfo.infos" :key="index">
          <td class="info-param-key">{{info.key}}</td>
          <td class="param-value">{{info.value}}</td>
        </tr>
      </table>
      <!--<div class="info-img" v-if="paramesinfo.image.length !== 0">-->
        <!--<img v-for="(item,index) in paramesinfo.image" :src="item" alt="" :key="index">-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "DetailParams",
        props:{
          paramesinfo:{
            type:Object,
            require:true,
            default:() => {}
          }
        }
    }
</script>

<style scoped>
    .detail-parames{
      padding: 20px 15px;
      font-size: 14px;
      border-bottom: 5px solid #f2f5f8;
    }
    .rule-key{
      margin: 10px 0 10px 15px;
      color: #333;
      font-size: 15px;
    }
    .detail-parames table {
      width: 100%;
      border-collapse: collapse;
    }
    .detail-parames table tr {
      height: 42px;
    }

    .detail-parames table tr td {
      border-bottom: 1px solid rgba(100,100,100,.1);
    }
    .info-param-key {
      /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
      width: 95px;
    }

    .info-param {
      border-top: 1px solid rgba(0,0,0,.1);
    }

    .param-value {
      color: #eb4868
    }
    .info-img img {
      width: 100%;
    }
</style>
