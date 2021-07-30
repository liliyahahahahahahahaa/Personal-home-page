<template>
  <div class="main">
    <leftNav :isCollapse="isCollapse" v-on:handler-router="getRouteInfo"></leftNav>
    <div class="main-content">
      <div class="oli-top-menu text-left w-100 px-4 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <i class="el-icon-guide font-size-super mr-1"></i>
          <span class="mx-1">Home</span> 
          <span v-if="curRouteInfo.path !== '/'" class="mx-1">/</span>
          <span v-if="curRouteInfo.path !== '/'" class="mx-1">{{curRouteInfo.matched[0] && curRouteInfo.matched[0].name}}</span>
          <span v-if="curRouteInfo.path !== '/'" class="mx-1">/</span> 
          <span v-if="curRouteInfo.path !== '/'" class="mx-1" style="color:#a7a7a7">{{curRouteInfo.matched[1] && curRouteInfo.matched[1].name}}</span>
        </div>
        <div class="d-flex align-items-center">
          <div class="px-2 cursor-pointer">
            <el-badge :value="7" :max="10" class="item">
              <i class="el-icon-bell font-size-super"></i>
            </el-badge>
          </div>
          <div class="pl-2 cursor-pointer">
            <el-tooltip class="item" effect="dark" content="访客" placement="bottom-end">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-tooltip>
          </div>
          <!-- <div class="pl-2"><i class="el-icon-user font-size-super"></i></div> -->
        </div>
          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group> -->
      </div>
      <div style="height:50px;"></div>

      <oliWebsocket></oliWebsocket>


      <div class="main-bottom">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import leftNav from './components/comm/leftNav.vue'
import oliWebsocket from './components/plugin/oli-websocket/oli-websocket.vue'

export default {
  name: 'App',
  data(){
      return {
          isCollapse: false,
          curRouteInfo: {
            matched: []
          }
      }
  },
  created(){},
  methods:{
    getRouteInfo(data){
      this.curRouteInfo = data;
    }
  },
  components: {
    leftNav,oliWebsocket
  }
}
</script>
<style lang="scss">
  *{box-sizing: border-box;}
  html,body,#app,.main{width: 100%;height: 100%;}
  body{margin: 0;overflow: hidden;}
 
  .main{
      height: 100%;
      display:flex;
      .left-nav{
        width: 260px;
        background: #304156;
        color: #fff;
        height: 100%;
      }
      .main-content{
        overflow-y: scroll;
        width: calc(100% - 260px);
        .main-bottom{
          padding: 20px 30px;
        }
        .oli-top-menu{
          width: calc(100% - 272px);
          position: fixed;top:0;height:50px;box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);background:#fff
        }
        &::-webkit-scrollbar{
          width:10px;
          height:10px;
          /**/
        }
        &::-webkit-scrollbar-track{
          background: rgb(239, 239, 239);
          border-radius:2px;
        }
        &::-webkit-scrollbar-thumb{
          background: #bfbfbf;
          border-radius:10px;
        }
        &::-webkit-scrollbar-thumb:hover{
          background: #333;
        }
        &::-webkit-scrollbar-corner{
          background: #179a16;
        }
      }
  }
</style>

