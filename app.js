const http = require("http");
const fs = require("fs");


function main(req, res) {
    if(req.url == "/" ){
        res.writeHead(200, {"Content-type":"text/html"});
        res.end(fs.readFileSync("index.html"));
    } else {
        res.writeHead(404);
        res.end
    }
}

let srv = http.createServer(main);
srv.listen(8080);

console.log("Beží na http://localhost:8080");