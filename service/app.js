var express = require('express');
var app = express();


var Base64 = require('js-base64').Base64;

var mysql = require('mysql')	//寮曞叆mysql妯″潡

//鍒涘缓杩炴帴
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'admin',
	database:'hand'
})

//鎵ц杩炴帴
connection.connect()

//缁熶竴璁剧疆鍝嶅簲澶达紝瑙ｅ喅璺ㄥ煙闂
app.use(function(req,res,next){
	console.log('comeing!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
	res.set({
			'Access-Control-Allow-Origin':'*',
			'Access-Control-Allow-Headers':'authorization'
	})
	next()
})

app.get('/', function (req, res) {
//res.send('Hello World!');
	res.sendFile('index.html')
});

app.get('/user',function(req,res){
	//console.log(req.query)
	
	connection.query("select * from account where account = '" + req.query.account +"'",function(err,rows,fields){
			if(rows.length == 0){
				res.send({
					error:{
						message:'鐢ㄦ埛鍚嶆垨瀵嗙爜閿欒'
					}
				})
			} else if(Base64.encode(req.query.password) == rows[0].password) {
				res.send({
					success:'true',
					message:'鐧诲綍鎴愬姛'
				})
			}
	})
		
	
})

var server = app.listen(80, function () {
	
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});