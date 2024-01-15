const fs=require('fs')


fs.readFile("./Container/SubContainer/first.txt",'utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }
    const first=result;
    console.log(first);
    fs.readFile("./Container/SubContainer/second.txt",'utf-8',(err,result)=>{
        if(err){
            console.log(err);
        }
        const second=result;
        console.log(result);
    })
    fs.writeFile('./Container/fourth.txt',`${first}`,(err,result)=>{
        if(err){
            console.log(err);
        }
        console.log(result);
    })
})