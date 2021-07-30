<template>
    <div class="text-left">

        <div class="d-flex align-items-center">
             <el-upload
                class="upload-demo d-inline-block"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                accept=".xls,.xlsx"
                :limit="1"
                :on-exceed="handleExceed"
                :on-success="handleworkData"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <p class="el-upload__text" style="font-size:12px;color:#b5b5b5;margin-top:5px;">(仅支持上传 .xls,.xlsx 文件 )</p>
            </el-upload>
            <a href="http://ued.wondershare.cn/WDesign/test/考勤.xlsx" class="ml-4"><el-button type="primary">点击下载表格模板</el-button></a>
        </div>
        

        <!-- {{workHoursData}} -->
        <div class="mt-5 text-center">
            <el-table
                :data="workHoursData"
                border
                :summary-method="getSummaries"
                show-summary
                style="width: 100%;">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="clockIn"
                    sortable
                    label="上班打卡时间">
                </el-table-column>
                <el-table-column
                    prop="clockOut"
                    sortable
                    label="下班打卡时间">
                </el-table-column>
                <el-table-column
                    prop="dailyTotal"
                    label="出勤时长（小时）">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import XLSX from 'xlsx'
import { ElMessage } from 'element-plus'
export default {
  name: 'workTime',
  props: {
    workDateList:[]
  },
  data() {
      return {

        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }],
        initData:[],
        // initData:[ { "date": 44166, "clockIn": 0.37152777777777773, "clockOut": 0.8055555555555555 }, { "date": 44167, "clockIn": 0.36944444444444446, "clockOut": 0.9444444444444445 }, { "date": 44168, "clockIn": 0.36944444444444446, "clockOut": 0.9236111111111112 }, { "date": 44169, "clockIn": 0.3277777777777778, "clockOut": 0.9229166666666666 }, { "date": 44170, "clockIn": 0.369444444444444, "clockOut": 0.9208333333333334 }, { "date": 44171, "clockIn": 0.369444444444444, "clockOut": 0.75 }, { "date": 44172, "clockIn": 0.3756944444444445, "clockOut": 0.9583333333333334 }, { "date": 44173, "clockIn": 0.369444444444444, "clockOut": 0.916666666666667 }, { "date": 44174, "clockIn": 0.369444444444444, "clockOut": 0.8333333333333334 }, { "date": 44175, "clockIn": 0.369444444444444, "clockOut": 0.7729166666666667 }, { "date": 44176, "clockIn": 0.369444444444444, "clockOut": 0.916666666666667 }, { "date": 44177, "clockIn": 0.369444444444444, "clockOut": 0.916666666666667 } ],
        workHoursData:[],
        clockInTime:"",
        clockOutTime:"",

        dragEle:"",
        isDragging:0,
        leftPos:"50%",
        minLeftPos:"",
        maxLeftPos:"",
        dragElementWidth:"",
        elementOffsetLeft:"",

        dailyDifftime:""
      }
    },
    created(){
        this.timeConversion()
        
    },
    methods:{
        handleExceed() {
            this.$message.warning(`只能上传一个文件`);
        },
        timeConversion(){
            this.workHoursData = []
            var BreakException = {}
            try{
                this.initData.forEach((e,i) => {
                    console.log(e)
                    if(!(this.initData[0].date || this.initData[0].clockIn || this.initData[0].clockOut)){
                        ElMessage.error('读取数据失败，请上传正确格式的表格')
                        throw BreakException
                    }
                    this.formatDate(e.date,"/")
                    // date
                    this.workHoursData.push({date:this.formatDate(e.date,"/")})

                     // time
                    this.clockInTime = parseInt(e.clockIn * 24)
                    this.clockOutTime = parseInt(e.clockOut * 24)
                    this.workHoursData[i].clockIn = (this.clockInTime < 10 ? ("0" + this.clockInTime):this.clockInTime) + ":" + (((e.clockIn * 24 - this.clockInTime)*60).toFixed() < 10 ? ("0"+((e.clockIn * 24 - this.clockInTime)*60).toFixed()):((e.clockIn * 24 - this.clockInTime)*60).toFixed())
                    this.workHoursData[i].clockOut = (this.clockOutTime < 10 ?"0" + this.clockOutTime:this.clockOutTime) + ":" + (((e.clockOut * 24 - this.clockOutTime)*60).toFixed() < 10 ? ("0"+((e.clockOut * 24 - this.clockOutTime)*60).toFixed()):((e.clockOut * 24 - this.clockOutTime)*60).toFixed())

                    //daily total
                    this.workHoursData[i].dailyTotal = this.timeDiffComputed(new Date("2020-01-01 " + this.workHoursData[i].clockIn + ":00"),new Date("2020-01-01 " + this.workHoursData[i].clockOut + ":00"))
                });
            }catch(e){
                if(e!==BreakException) throw e
            }

        },
        timeDiffComputed(startTime,endTime){
            if((endTime >= new Date("2020-01-01 18:00:00")) && (endTime <= new Date("2020-01-01 18:40:00"))){
                this.dailyDifftime = endTime - startTime - (new Date("2020-01-01 13:30:00") - new Date("2020-01-01 12:00:00")) - (endTime - new Date("2020-01-01 18:00:00"))
            }else if(endTime > new Date("2020-01-01 18:40:00")){
                this.dailyDifftime = endTime - startTime - (new Date("2020-01-01 13:30:00") - new Date("2020-01-01 12:00:00")) - (new Date("2020-01-01 18:40:00") - new Date("2020-01-01 18:00:00"))
            }
            
            var hours = parseInt(this.dailyDifftime/3600/1000);   
            var minutes = parseInt((this.dailyDifftime/1000)%3600/60/60*100) < 10 ? ("0" + parseInt((this.dailyDifftime/1000)%3600/60/60*100)) :  parseInt((this.dailyDifftime/1000)%3600/60/60*100); 
            return hours + "." + minutes 
        },
        formatDate(numb, format){//
            const time = new Date((numb - 1) * 24 * 3600000 + 1)
            time.setYear(time.getFullYear() - 70)
            const year = time.getFullYear() + ''
            const month = time.getMonth() + 1  + ''
            const date = time.getDate() - 1 + ''
            // console.log(time.getDate())
            if (format && format.length === 1) {
            return year + format + month + format + date
            }
            return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
        },
        handleworkData(response, file, fileList) {
            var fileD = fileList[0].raw;
            const reader = new FileReader();
            reader.readAsBinaryString(fileD);
            reader.onload = (e) => {
                const data = e.target.result;
                const zzexcel = XLSX.read(data, {type: 'binary'});
                const result = [];
                for (let i = 0; i < zzexcel.SheetNames.length; i++) {
                    const newData = XLSX.utils.sheet_to_json(zzexcel.Sheets[zzexcel.SheetNames[i]]);
                    result.push(...newData)
                }
                this.initData = result
                this.timeConversion()
                // console.log('result', result)
            }
        },
        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
            if (index === 0) {
                sums[index] = '平均时长';
                return;
            }
            const values = data.map(item => Number(item[column.property]));
            if (!values.every(value => isNaN(value))) {
                sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!isNaN(value)) {
                    return prev + curr;
                } else {
                    return prev;
                }
                }, 0);
                sums[index] = sums[index] / this.workHoursData.length
                sums[index] += ' 小时';
            } else {
                sums[index] = '/';
            }
            });

            return sums;
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.cocoen {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 0;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.transparency-grid {
    background-color: #fff;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjkzNyA3LjkzOCIgaGVpZ2h0PSIzMCIgd2lkdGg9IjMwIj48cGF0aCBwYWludC1vcmRlcj0ic3Ryb2tlIGZpbGwgbWFya2VycyIgZD0iTS4wMTQuMDE0SDMuOTdWMy45N0guMDE0ek0zLjk3IDMuOTY4aDMuOTU0djMuOTU1SDMuOTd6IiBmaWxsPSIjZWVlZmYwIi8+PC9zdmc+);
    background-size: 25px;
}
.cocoen-drag {
    background: #fff;
    bottom: 0;
    cursor: ew-resize;
    left: 50%;
    margin-left: -1px;
    position: absolute;
    top: 0;
    width: 2px;
}
.cocoen-drag .drag-inner {
    border: 2px solid #fff;
    content: "";
    height: 40px;
    width: 40px;
    margin-left: -20px;
    margin-top: -20px;
    padding-top: 10px;
    left: 50%;
    top: 50%;
    position: absolute;
    border-radius: 100%;
    color: rgba(0,0,0,.5);
    text-align: center;
    background: hsla(0,0%,100%,.7);
}
.cocoen>div:first-child, picture .cocoen>div {
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 50%;
}
.cocoen>img, .cocoen>picture>img {
    display: block;
    width: 100%;
}

ul{
    li{
        position:relative;
        display: inline-block;
        width:200px;
        margin: 15px;
        padding: 4px 10px;
        border: 1px solid grey;
        cursor: pointer;
        .hoverBox{
            box-sizing: border-box;
            width:100%;
            height: 50px;
            position: absolute;
            left: 0;
            top: 100%;
            padding-top: 10px;
            z-index: 9999;

            transition:visibility .1s;
            visibility:hidden;
            .hoverBoxItem{
                width:100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                 background: #dadada;
            }
        }
        &:hover{
            .hoverBox{
                transition:all .3s;
                visibility: visible;
            }
        }
    }
}
.box{
    display: flex;
    flex-wrap: wrap;
    .item{
        width:600px;
        background: grey;
        border: 1px solid #fff;
        padding: 15px;
        &:nth-child(1){
            order: 5;
        }
            &:nth-child(2){
            order: 3;
        }
            &:nth-child(3){
            order: 1;
        }
        &.yellow{
            background: #c1c1c1;
            border  : 1px solid #fff;
            padding: 15px;
            &:nth-child(1){
                order: 2;
            }
            &:nth-child(2){
                order: 4;
            }
            &:nth-child(3){
                order: 6;
            }
        }
    }
    
}
</style>
