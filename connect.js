const db = require('./db.js');
const mysql = require('mysql');
module.exports = function () {
	return mysql.createConnection(db.mysql);
}