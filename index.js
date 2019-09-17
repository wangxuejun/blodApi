const express = require('express')
const db = require('./db.js')
const mysql = require('mysql')
const app = express()
var multipart = require('connect-multiparty');

var coon = mysql.createConnection(db.mysql)
coon.connect((err) => {
	if (err) {
		console.log('err1')
		return
	}
	console.log('success2')
});

app.get('/', (req, res) => {
	let sql = "SELECT * FROM user";
	coon.query(sql, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))