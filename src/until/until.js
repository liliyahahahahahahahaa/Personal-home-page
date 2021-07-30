import { ElMessage } from 'element-plus'
export default {
    copyText: function(textVal){
        // navigator.clipboard.writeText(textVal).then(() => {
        //     console.log("success")
        //     ElMessage.success("Copy successfully")
        // }).catch(err => {
            let textArea = document.createElement("textarea");
            textArea.value = textVal;
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            // console.log(err)
            try {
                document.execCommand('copy');
                ElMessage.success("Copy successfully")
            } catch (err) {
                console.log(err)
                ElMessage.error('Fallback: Oops, unable to copy')
            }
            document.body.removeChild(textArea);
        // });
    },
    GetQueryString: function(name){
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    },
    mouseFollow: function(){
        // let canvas = document.getElementById("myCanvas");
        let canvas = document.createElement('canvas')
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        canvas.id = "myCanvas"

        console.log(canvas)
        console.log(document.getElementById("myCanvas"))
        document.appendChild(canvas)

        let ctx = canvas.getContext("2d");
        let R = 0,
            G = 70,
            B = 255,
            rs = 1,
            gs = 1,
            bs = 1;

        ctx.fillRect(0, 0, width, height);

        function Circle(x, y, size, color, opc) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
            this.opc = opc
        }
        Circle.prototype.draw = function() {
            ctx.beginPath();
            ctx.strokeStyle = this.color;

            ctx.lineWidth = 4
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.stroke();
        }

        Circle.prototype.update = function() {
            this.size = this.size + 1;
            this.opc = (60 - this.size) / 60;
            this.color = `rgba(${R},${G},${B},${this.opc})`
        }
        // let circle = new Circle(100,100,10,"red");
        let circleList = [];

        function loop() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillRect(0, 0, width, height);
            // changeColor();

            if (R == 0 || R == 255) rs *= -1;
            if (G == 0 || G == 255) gs *= -1;
            if (B == 0 || B == 255) bs *= -1;
            R += 1 * rs;
            G += 1 * gs;
            B += 1 * bs;

            circleList.forEach((v, i) => {
                if (v.size >= 60) {
                    circleList.splice(i, 1);
                    return;
                }
                v.draw();
                v.update()
            })
            requestAnimationFrame(loop)
        }
        loop()
        //改变颜色
        // function changeColor() {
        //     if (R == 0 || R == 255) rs *= -1;
        //     if (G == 0 || G == 255) gs *= -1;
        //     if (B == 0 || B == 255) bs *= -1;
        //     R += 1 * rs;
        //     G += 1 * gs;
        //     B += 1 * bs;
        // }

        // 响应事件
        console.log(canvas)
        setTimeout(function(){
            canvas.addEventListener("mousemove", function(e) {
                console.log(333)
                circleList.push(new Circle(e.clientX, e.clientY, 20, `rgba(${R},${G},${B},${1})`, 1))
            })
        },0)
       
    }
    // getCookie: function(cookieName) { 
    //     var arr,regCookie=new RegExp("(^| )"+cookieName+"=([^;]*)(;|$)");
    //     if(arr=document.cookie.match(regCookie)){
    //         return unescape(arr[2]); 
    //     }else{
    //         return null; 
    //     }
    // }
   


}