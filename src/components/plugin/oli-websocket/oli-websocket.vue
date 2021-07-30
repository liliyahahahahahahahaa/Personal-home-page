<template>
    <div class="oli-websocket">
        <Button @click="test">test</Button>
       
    </div>
</template>

<script>
    let socket;
    export default {
        name: "oliWebsocket",
        data(){
            return {
               // 连接标志位
                lockReconnect: false,
                wsCfg: {
                    // websocket地址
                    url: "ws://127.0.0.1:8080"
                }
            }
        },
        watch: {},
        // created(){
        //     this.initWebSocket();
        // },
        onUnmounted() {
            // this.websock.close() //离开路由之后断开websocket连接
        },
        mounted(){
            this.createWebSocket()
        },
        methods:{
            createWebSocket() {
                try {
                    // 创建Web Socket 连接
                    socket = new WebSocket(this.wsCfg.url);
                    // 初始化事件
                    console.log(socket)
                    this.initEventHandle(socket);
                   
                } catch (e) {
                    // 出错时重新连接
                    this.reconnect(this.wsCfg.url);
                    console.log("出错了")
                }
            },
            initEventHandle(socket) {

                console.log(777)
                // 连接关闭时触发
                socket.onclose = () => {
                    console.log("连接关闭");
                };
                // 通信发生错误时触发
                socket.onerror = () => {
                    // 重新创建长连接
                    console.log("重新创建长连接")
                    this.reconnect();
                };
                // 连接建立时触发
                socket.onopen = () => {
                    console.log("连接成功");
                };
                // 客户端接收服务端数据时触发
                socket.onmessage = msg => {
                    // 业务逻辑处理
                    console.log(msg.data, "ws:data");
                };
            },
            reconnect() {
                console.log(this.lockReconnect)
                if (this.lockReconnect) {
                    return;
                }
                this.lockReconnect = true;

                // 没连接上会一直重连，设置延迟避免请求过多
                setTimeout(() => {
                    this.lockReconnect = false;
                    this.createWebSocket(this.wsCfg.url);
                }, 1000);
            },
            test() {
                // 给服务器发送一个字符串:
                console.log(socket)
                // ws.send("Hello!");
                socket.send("Hello!");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .oli-websocket{
        text-align: left;
        padding: 30px;
    }
</style>