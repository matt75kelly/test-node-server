const http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var compliments = [
    "You look nice", 
    "You sound smart",
    "I like your shirt", 
    "You're soooo Wizzard",
    "You're definitely a good person"
];

var insults = [
    "You suck!",
    "You are not a very nice person",
    "You don't smell like roses",
    "You're not all that impressive, are you?"
];

function handleRequestOne(request, response){
    let random = Math.floor(Math.random() * compliments.length);
    response.end(`This is something positive about you: ${compliments[random]} Whoot! Hit Path ${request.url}`);
}

function handleRequestTwo(request, response){
    let random = Math.floor(Math.random() * insults.length);
    response.end(`This is something negative about you: ${insults[random]} Whoot! Hit Path ${request.url}`);
}

var server1 = http.createServer(PORT1, handleRequestOne);
var server2 = http.createServer(PORT2, handleRequestTwo);

server1.listen(PORT1, function(){
    console.log("Positivity Server is listening on http://localhost:" + PORT1 + "/");
});

server2.listen(PORT2, function(){
    console.log("Negativity Server is listening on http://localhost:" + PORT2 + "/");
});