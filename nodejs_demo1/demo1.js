/**
 * Created by gwang on 4/20/2016.
 */
var http = require('http');
http.createServer(function (req, res) {
    var url = req.url;
    dataPosts = "";
    req.on('data',function (dataPostChunk) {
        dataPosts += dataPostChunk;
    });
    req.on('end',function () {
        console.log("PostData : " + dataPosts);
    });
    console.log("Current url: " + url);
    res.writeHead("200",{"content-type":"text/html"});
    res.write("Hello World");
    res.end();
}).listen(8888, function () {
    console.log("The server is start to : 8888...");
});
console.log("Welcome to Node JS!!!!");
