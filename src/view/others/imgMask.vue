<template>
    <div class="text-left">
        <div class="row align-items-center" ref="cocoenCont" id="cocoenCont" @mouseup="dragMouseUp($event)">
          <div class="col-md-6 order-md-last mx-0 px-0">
            <div class="cocoen"  @mousemove="gmouseMove($event)">
                <div :style="{ width: leftPos }" ref="cocoen"><img class="img-fluid" src="https://static.remove.bg/remove-bg-web/2c3e817eac2bc43eca848062cef2538fe408b946/assets/before-after/s4-before-adae36f33be28544be303d62ed0bd26b16f2555b84b90fdc61bcfcad4e37eb85.jpg" style="height:100%"></div>
                <img class="img-fluid transparency-grid" src="https://static.remove.bg/remove-bg-web/2c3e817eac2bc43eca848062cef2538fe408b946/assets/before-after/s4-after-f0cc7fec0c5013f7e8568b5ba776425b78be446b919adb5abd8bf477d1c71bcf.png">
                <span :style="{ left: leftPos }" class="cocoen-drag" @mousedown="dragMouseDown(this,$event)">
                    <span class="drag-inner">
                        <i class="fas fa-chevron-left mr-1"></i><i class="fas fa-chevron-right ml-1"></i>
                    </span>
                </span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'workTime',
  props: {
    workDateList:[]
  },
  data() {
      return {
        isDragging:false,
        leftPos:"50%",
        startX:"",
        cocoenWidth:"",
      }
    },
    created(){},
    mounted(){},
    methods:{
        gmouseMove(e){
            this.isDragging && (this.leftPos = this.cocoenWidth + (e.pageX - this.startX) + "px")
        },
        dragMouseDown(that,e){//鼠标按下
            this.cocoenWidth = parseInt(window.getComputedStyle(this.$refs.cocoen).width)
            this.startX = e.pageX
            this.isDragging = true
        },
        dragMouseUp(e){//鼠标松开
            this.isDragging && (this.leftPos = this.cocoenWidth + (e.pageX - this.startX) + "px")
            this.isDragging = false
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
</style>