/**
 * Created by gwang on 6/16/2016.
 */
var conn = require('../dao/connection');

exports.home = function (req, res) {
    res.render('index', {title: 'Guanzhong Wang'});
};

exports.getName1 = function (req, res, next) {
    conn.getEmployee1(req, res, next);
};

exports.getName2 = function (req, res, next) {
    conn.getEmployee2(req, res, next);
};

exports.renderPage = function (req, res) {
    res.render('employee', {
        name1:req.name[0], name2 : req.name[1]
    });
};