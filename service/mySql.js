var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'hand'
});

connection.connect();

connection.query('select * from user', function(err, rows, fields) {
	
	console.log(rows);
	console.log(fields);
//if (err) throw err;
	if (err) {
		 console.log('出错啦：     ', err);
	};
});

connection.end();