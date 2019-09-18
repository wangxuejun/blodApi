const express = require('express');
const app = express();
const con = require('./connect');
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.post('/user', (req, res) => {
	let sql = "SELECT * FROM user";
	let connect = con();
	connect.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
		connect.end();
	})
})
