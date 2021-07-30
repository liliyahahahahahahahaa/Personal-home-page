<template>
  <div class="text-left page-ruls">
    <h1 class="mt-0">常用正则表达式及实用扩展</h1>
    <section>
      <p>Regular Expression，常简写为regex、regexp或RE。</p>
      <p>在线匹配工具：<a href="https://c.runoob.com/front-end/854" target="_blank">https://c.runoob.com/front-end/854</a> 、<a href="https://regex101.com/" target="_blank">https://regex101.com/</a> </p>
      <p>正则大全：<a href="https://any86.github.io/any-rule/" target="_blank">https://any86.github.io/any-rule/</a></p>
    </section>
    <section>
      <ul>
        <li>
          <h2>常用正则表达式</h2>
            <table>
            <thead>
              <tr class="text-center">
                <td>场景</td>
                <td>表达式</td>
                <td>示例</td>
                <td>操作</td>
              </tr>
            </thead>
          
            <tbody>
              <tr v-for="(item,index) in regExpData" :key="index">
                <td> {{item.scenes}}</td>
                <td>{{item.expression}}</td>
                <td>{{item.examp}}</td>
                <td class="cursor-pointer text-center" @click="untils.copyText(item.expression)" style="width:100px">复制</td>
              </tr>
            </tbody>
          </table>
          <p class="text-center pt-1">表（2-1-1）</p>
        </li>


      </ul>
    </section>
    



  </div>
</template>

<script>
 import regData from "./json/regExp.json"
  export default {
    name: 'pageRuls',
    props: {
      msg: String,
      // htmlEncode:""
    },
    data(){
        return{
            regExpData:regData,
        }
    },
    created(){
    },
    methods:{
      // copy(){
      //   this.untils.copyText("复制哈哈")
      // }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-ruls{
  .w-100{width: 100%;}
  .gray{
    color: #14c78b;
  }
  ul,li{
    list-style: trad-chinese-informal;
  }
  ul{
    padding-left: 50px;
  }
  li{
    margin: 2rem 0;
    ul,li{
      list-style: decimal;
    }
    ul{padding-left: 20px;}
    li{
      margin-top: 0;
    }
  }
  textarea{
    width: 100%;
    background: transparent;
    border: 0;
    resize: none;
  }
  table{
    border: 1px solid #d2d2d2;
    border-spacing:0;
    tr,thead{
      border-bottom: 1px solid #d2d2d2;
    }
    thead{
      background: #f3f3f3;
      font-weight: bold;
    }
    tbody{
      tr{
        &:last-child{
          td{
            border-bottom: 0;
          }
        }
      }
    }
    td{
      border-left: 1px solid #d2d2d2;
      padding: 6px 12px;
      border-bottom: 1px solid #d2d2d2;
      &:first-child{
        border-left: 0;
      }
    }
    
  }
}

</style>
