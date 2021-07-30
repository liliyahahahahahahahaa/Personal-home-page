

var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8181 });//服务端口8181

let messageStorage = ""

// console.log(wss)
wss.on('connection', function connection(ws, req) {
    console.log('%s is connected 哈哈哈', "已经连接")
    ws.send(messageStorage)
    ws.on('message', function incoming(message) {
        //打印客户端监听的消息
        if(message){

        }
      messageStorage +=  `name1号 @name@ ${message} @message@ `
      console.log("%s message list",messageStorage)
      wss.clients.forEach(function each(client) {
        if (client.readyState === require('ws').OPEN)  {
          client.send(messageStorage);
        }
      });
    });
});