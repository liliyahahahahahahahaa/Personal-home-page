<template>
  <div class="text-left">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center text-white p-4 mr-3 w-100" style="background:#318ede;">
        <i class="el-icon-s-flag font-size-super mr-2"></i>
        <div>
          待办事项 ( 2 )
        </div>
      </div>
      <div class="d-flex align-items-center text-white p-4 mr-3 w-100" style="background:#5aca5a;">
        <i class="el-icon-s-flag font-size-super mr-2"></i>
        待办事项
      </div>
      <div class="d-flex align-items-center text-white p-4 mr-3 w-100" style="background:#f5ab42;">
        <i class="el-icon-s-flag font-size-super mr-2"></i>
        待办事项
      </div>
      <div class="d-flex align-items-center text-white p-4 mr-3 w-100" style="background:#ef5853;">
        <i class="el-icon-s-flag font-size-super mr-2"></i>
        待办事项
      </div>
    </div>
rxjs,ts

    <div class="mt-4 row">
      <div class="col-6">
        <div class="p-3" style="box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04)">
          <p>待办事项</p>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </div>
      
    </div>

    <p class="font-weight-bold mt-4 font-size-super">常用命令</p>
    <div class="mt-3 row">
        
        <div class="col-6">
          <div><p>创建文件夹：mkdir 文件夹名称</p></div>
        </div>
        <div class="col-6">

        </div>
      </div>
   
        
  </div>
</template>

<script>
  export default {
    name: 'pageRuls',
    props: {
      msg: String,
      // htmlEncode:""
    },
    data(){
        return{
        }
    },
    created(){
    },
    methods:{
   
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
