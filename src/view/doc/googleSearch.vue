<template>
  <div class="text-left page-ruls">
    <h1 class="mt-0">google 搜索</h1>
    <section>
      <p>进入google搜索后台配置搜索引擎，提供搜索id：<a href="https://cse.google.com/cse/create/new" target="_blank">https://cse.google.com/cse/create/new</a></p>
      <p>配置说明：<a href="https://www.cnblogs.com/mingjiatang/p/6048193.html" target="_blank">https://www.cnblogs.com/mingjiatang/p/6048193.html</a></p>
    </section>
    <section>
      <ul>

        <li>
          <h2>配置指引</h2>
          <p class="pb-3">细分文件夹搜索 对应配置规则示例：</p>
          <!-- <p class="pb-3">header导航部分分为两块，分别置于nav块内：<strong>wondershare主导航</strong> 和 <strong>子产品导航</strong></p>
          <div class="pb-3 pl-3">
            <p class="pb-1">1.wondershare主导航</p>
            <p class="pl-3">固定两个类名：① wsc-header2020-navbar-master（主导航标记为master） ② wsc-header2020-navbar-wondershare （主导航产品标记为wondershare）</p>
          </div>
          <div class="pb-3 pl-3">
            <p class="pb-1">2.子产品导航</p>
            <p class="pl-3">固定两个类名：① wsc-header2020-navbar-main（子产品导航标记为main） ② wsc-header2020-navbar-** （子产品名称标记,例如：wsc-header2020-navbar-filmora，wsc-header2020-navbar-pdfelement）</p>
          </div> -->
          <img src="/images/googleSearch/demo-1.png" alt=""/>

            <!-- <table>
            <thead>
              <tr class="text-center">
                <td>场景</td>
                <td>表达式</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in regExpData" :key="index">
                <td> {{item.scenes}}</td>
                <td>{{item.expression}}</td>
                <td class="cursor-pointer text-center" @click="untils.copyText(item.expression)">复制</td>
              </tr>
            </tbody>
          </table>
          <p class="text-center pt-1">表（2-1-1）</p> -->
        </li>

         <li>
          <h2>页面代码指引</h2>
          <p class="pb-3">细分文件夹搜索 对应代码示例：</p>

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
