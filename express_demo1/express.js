/**
 * Created by gwang on 6/14/2016.
 */
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.end('hello\n');
});
var Router = express.Router();
Router.get('/add', function(req, res){
    res.end('Router /add\n');
});

app.use('/post', Router);

app.route('/article')
    .get(function (req,res) {
        res.end('route /article get\n')
    });

app.listen(18000, function afterListen(){
    console.log('express running on http://localhost:18000');
});