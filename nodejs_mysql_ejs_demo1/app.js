/**
 * Created by gwang on 6/16/2016.
 */
var express = require('express');
var home = require('./routes/home');
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    home.home(req, res);
});

app.use('/employee', home.getName1, home.getName2, home.renderPage);
app.use('/api/getA/:id',function (req,res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: req.params.id }));
});

app.listen(3000);