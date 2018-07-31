const http = require("http");
const fs = require("fs");

const PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log(`Server is listening on http://localhost:${PORT}.`);
});

function handleRequest(req, res){
    var path = req.url;

    switch(path){
        case "/":
        return displayRoot(path, req, res);

        case "/food":
        return displayFood(path, req, res);

        case "/movies":
        return displayMovies(path, req, res);
        
        case "/css":
        return displayCss(path, req, res);

        default:
        return display404(path, req, res);
    }
};

function displayRoot(url, req, res){
    fs.readFile(__dirname + "/index.html", (err, data)=>{
        if(err) throw err;
        else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    });
}
function displayFood(url, req, res){
    fs.readFile(__dirname + "/food.html", (err, data)=>{
        if(err) throw err;
        else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    });
}
function displayMovies(url, req, res){
    fs.readFile(__dirname + "/movies.html", (err, data)=>{
        if(err) throw err;
        else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    });
}
function displayCss(url, req, res){
    fs.readFile(__dirname + "/favCss.html", (err, data)=>{
        if(err) throw err;
        else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }
    });
}
function display404(url, req, res){
    var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}