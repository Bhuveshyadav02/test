const http=require('http')


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Your are at home page")
    }
    
    res.write("Hello to http server")
    res.end()
})
server.listen(5000)