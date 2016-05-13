var http = require('http');

http.createServer(function(request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	// 发送响应数据 "Hello World"
	response.end('Hello xxxxxxxxxxxxxxxxxxxxxxxxxx World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
console.log("同步读取示例::::");

var fs = require("fs");

var data = fs.readFileSync('111.txt');

console.log(data.toString());

console.log("异步读取示例>>>>>>");
var fs = require('fs');
fs.readFile('111.txt', 'utf-8', function(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
	}
});
console.log('end.');

console.log("程序执行结束!");