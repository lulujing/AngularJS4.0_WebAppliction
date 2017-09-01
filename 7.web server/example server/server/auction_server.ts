import * as express from  'express';
import {Server} from 'ws';

const  app=express();
export class  Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public  categories: Array<string>
    ) {
    }
}
const products: Product[] = [
    new Product(1, 'Apple8', 8000, 5, 'new brand phone', ['phone', 'electronic products']),
    new Product(2, 'Table', 800, 4, 'white dinner table', ['furniture']),
    new Product(3, 'PC', 1000, 3, 'window 10 and I7', ['Desktop', 'electronic products']),
    new Product(4, 'LabTop', 600, 3.5, 'brand new SSID drive hard', ['labtap', 'electronic products']),
    new Product(5, 'oil heater', 50, 2.5, 'one years old  and works', ['heater', 'electronic products'])];
app.get('/',(req,res)=>{
    res.send("Hello Express");
})

app.get('/api/products',(req,res)=>{
    res.json(products);
});
app.get('/api/product/:id',(req,res)=>{
    res.json(products.find((product)=>product.id.toString()==req.params.id.toString()));
});
const  server=app.listen(8000,"localhost",()=>{
    console.log("server started, address http://localhost:8000");
})
const wsServer=new Server({ port:8085});
wsServer.on("connection",webscoket=>{
    webscoket.send("this is scoket server");
    webscoket.on("message",message=>{console.log("recieve" + message)})
})

setInterval(()=>{if(wsServer.clients){
    wsServer.clients.forEach(client=>{
        client.send("this is form socket server ,2s")
    })
}},2000)