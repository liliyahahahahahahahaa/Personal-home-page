<template>
    <div>
        <div>
<!--            {{domDataJson}}-->
        </div>
        <div style="display: flex;align-items: flex-start;justify-content: left;">

            <div style="width: 600px;margin: 0 100px;">
                 <!-- {{curStyleStr}} -->
                <div v-for="(dom1,index1) in domDataJson" :key="index1" >
                    <div :id="`sign-${index1.toString()}` " v-if="dom1.type === 'tag' && dom1.name === 'div' && dom1.children"
                         @click="clickThis($event,dom1.attrs.style,'',`sign-${index1.toString()}`)" :class="dom1.attrs.class" :style="dom1.attrs.style">
                            <div v-for="(dom2,index2) in dom1.children" :key="index2" >
                                <p :id="`sign-${index1.toString()}-${index2.toString()}`" v-if="dom2.type==='tag' && dom2.name==='p'" :style="dom2.attrs.style" :class="dom2.attrs.class"
                                   @click="clickThis($event,dom2.attrs.style,'',`sign-${index1.toString()}-${index2.toString()}`)">{{dom2.text}}</p>
                                <img :id="`sign-${index1.toString()}-${index2.toString()}`" v-if="dom2.type==='tag' && dom2.name==='img'" :src="dom2.attrs.src" :class="dom2.attrs.class"
                                     :style="dom2.attrs.style"
                                     @click="clickThis($event,dom2.attrs.style,dom2.attrs.src,`sign-${index1.toString()}-${index2.toString()}`)"/>
                                <button :id="`sign-${index1.toString()}-${index2.toString()}`" v-if="dom2.type==='tag' && dom2.name==='button'" :style="dom2.attrs.style"
                                    :class="dom2.attrs.class"
                                    @click="clickThis($event,dom2.attrs.style,'',`sign-${index1.toString()}-${index2.toString()}`)">{{dom2.text}}</button>
                            </div>
                    </div>
                </div>
            </div>

            <div class="right-toll-box" style="width: 300px;border: 1px solid #e3e3e3;padding: 15px">
                <!-- <div>{{currentDomStyleArrLast}}</div> -->
                <div class="tool-item" v-for="(item,index) in currentDomStyleArrLast" :key="index" >
                    <div v-if="item[0]" >
                        <p class="item-name">{{item[0]}}:</p>
                        <input type="text" v-model="item[1]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import domDataTree from "./json/domDataTree.json"
    export default {
        name: "getStyleAttr",
        data(){
            return{
                domDataJson:"",
                currentDomStyleArrLast:[],
                currentTagName:"",
                hah:[],
                currentDomStyleArr:[],
                curDomId:"",
                curStyleStr:""
            }
        },
        created(){
            this.domDataJson = domDataTree
        },
        mounted() {

        },
        watch:{
            currentDomStyleArrLast: {
                handler(newVal) {
                    console.log(newVal)
                    this.curStyleStr = ""
                    for(var n=0;n<newVal.length;n++){
                        if(newVal[n][0] && newVal[n][0] !== "src"){
                            this.curStyleStr += (newVal[n][0] + ':' + newVal[n][1] + ';')
                        }
                    }
                   document.getElementById(this.curDomId).setAttribute("style",this.curStyleStr)
                    // this.changeDomStyle(this.curStyleStr)
                    // console.log('深度监听', newVal, oldVal)
                },
                deep: true
            }
        },
        methods:{
            // changeDomStyle(s){

            // },
            clickThis(that,styleChar,srcChar,id){
                this.curDomId = id
                event.stopPropagation();
                this.currentDomStyleArrLast = []
                this.currentDomStyleArr = styleChar && styleChar.split(";");
                for (let i=0; i<this.currentDomStyleArr.length; i++ ){
                    this.currentDomStyleArrLast   && this.currentDomStyleArrLast.push(this.currentDomStyleArr[i].split(": "))
                }
                srcChar && this.currentDomStyleArrLast.push(["src",srcChar])
            }
        }
    }
</script>

<style scoped>
    .item-name{
        margin-bottom: 4px;
    }
    .tool-item{
        text-align: left;
        margin-top: 20px;
    }
    p{
        display: inline-block;
    }
    input{
        padding: 0 10px;
        color: #333;
        width: calc(100% - 20px);
        line-height: 36px;
        border: 1px solid #a1a1a1;
    }
</style>