<template>
    <div class="left-nav">
        <router-link to="/" class="sidebar-logo-container top-logo">Olivia</router-link>
        <!-- <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isMenuOpen">
            <el-submenu index="1">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template #title>分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <template #title>导航四</template>
            </el-menu-item>
        </el-menu> -->

        <div class="menu-box text-left">
            <div v-for="(item,index) in routerList" :key="index">
                <div v-if="!item.children" class="menu-1">
                    <router-link :to="{name:item.name}"> 
                        <span>{{item.name}}</span>
                    </router-link>
                </div>
                
                <div v-if="item.children">
                    <div class="menu-1" :class="(currentPath.indexOf(item.path)>-1)?'active':''">
                        <a>
                            <span>{{item.name}}</span>
                            <i class="iconfont icon-oli-arrow-right"></i>
                        </a>
                    </div>
                    <div v-for="(itemSub,indexSub) in item.children" :key="indexSub" :index="index+'-' + indexSub"  class="menu-2"  :class="(currentPath == (item.path + itemSub.path))?'active':''">
                        <router-link :to="item.path + itemSub.path">{{itemSub.name}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "leftNav",
        props: ['isCollapse'],
        data(){
            return {
                isMenuOpen: false,
                currentNavIndex:0,
                currentPath:"",
                routerList:""
            }
        },
        watch: {
            $route: {
                handler: function(route) {
                    this.currentPath = route.path
                    this.$emit("handler-router",route)
                },
                immediate: false
            },
            isCollapse: function (val) {  
                this.isMenuOpen = val
            }
        },
        created(){
            this.routerList = this.$router.options.routes
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },

            leftMenuCheck(currentIndex){
                this.currentNavIndex = currentIndex
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    *{transition: all .3s;}
    .left-nav{
        font-size: 14px;
        a{
            text-decoration: none;
            display: block;
            color: rgb(191, 203, 217);
        }
        .top-logo{
            background: #2b2f3a;
            line-height: 50px;
            padding: 0 10px;
            font-weight: bold;
            text-align: center;
        }
        .menu-box{
            cursor: pointer;
            padding: 0 0 10px;
            line-height: 30px;
            .menu-1{
                a{
                    padding: 10px 20px;
                }
                .iconfont{
                    float: right;
                }
                &.active{
                    .iconfont{
                        transform: rotate(90deg);
                    }
                }
                &:hover,&.active{
                    background: #263445;
                    a{
                        color: #fff;
                    }
                }
            }
            .menu-2{
                transition: all .3s;
                background: #1f2d3d;
                a{
                    padding: 10px 40px;
                }
                &.active{
                    a{
                        color: #409eff;
                    }
                }
                &:hover{
                    transition: all .3s;
                    background: #001528;
                }
            }
        }
        
    }
    
    
</style>