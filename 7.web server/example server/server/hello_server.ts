import * as http from  'http'

const  server=http.createServer((request , response)=>{
    response.end("hello Node");
});

server.listen(8000);