/**
 * Created by gwang on 6/16/2016.
 */
var mysql = require('mysql');

var db = mysql.createConnection({
    host:     '127.0.0.1',
    user:     'root',
    password: 'Ab521521',
    database: 'nodejs'
});

exports.getEmployee1 = function(req, res, next) {
    var query = "SELECT * FROM employee " +
        "WHERE id=? ";
    
    return db.query(
        query,
        [1],
        function(err, rows) {
            if (err) throw err;
            req.name = [];
            req.name[0] =  rows[0].name;
            return next();
        }
    );
};

exports.getEmployee2 = function(req, res, next) {
    var query = "SELECT * FROM employee " +
        "WHERE id=? ";

    return db.query(
        query,
        [2],
        function(err, rows) {
            if (err) throw err;
            req.name[1] =  rows[0].name;
            return next();
        }
    );
};

