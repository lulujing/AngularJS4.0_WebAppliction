"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function (request, response) {
    response.end("hello Node");
});
server.listen(8000);
