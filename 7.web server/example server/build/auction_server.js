"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, 'Apple8', 8000, 5, 'new brand phone', ['phone', 'electronic products']),
    new Product(2, 'Table', 800, 4, 'white dinner table', ['furniture']),
    new Product(3, 'PC', 1000, 3, 'window 10 and I7', ['Desktop', 'electronic products']),
    new Product(4, 'LabTop', 600, 3.5, 'brand new SSID drive hard', ['labtap', 'electronic products']),
    new Product(5, 'oil heater', 50, 2.5, 'one years old  and works', ['heater', 'electronic products'])
];
app.get('/', function (req, res) {
    res.send("Hello Express");
});
app.get('/api/products', function (req, res) {
    res.json(products);
});
app.get('/api/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id.toString() == req.params.id.toString(); }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("server started, address http://localhost:8000");
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (webscoket) {
    webscoket.send("this is scoket server");
    webscoket.on("message", function (message) { console.log("recieve" + message); });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send("this is form socket server ,2s");
        });
    }
}, 2000);
