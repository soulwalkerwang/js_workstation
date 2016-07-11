/**
 * Created by gwang on 6/8/2016.
 */
var http = require('http');
var urlm = require('url');
var server = http.createServer(function(req, res){
    var dataPosts = '';
    req.setEncoding('utf-8');
    req.on('data',function (dataPostChunk) {
        dataPosts += dataPostChunk;
    });
    req.on('end',function () {
        var deCode,
            post = {},
            datas = [],
            tmp,
            ret;
        deCode = decodeURI(dataPosts);
        datas = deCode.split('&');
        for(var i=0, item;item = datas[i++];){
            tmp = item.split('=');
            post[tmp[0]] = tmp[1] || '';
        }
        ret = JSON.stringify(post);
        console.log(ret);
        res.writeHead("200",{"content-type":"application/json"});
        res.end(ret);
    });

}).listen(8888,function () {

})