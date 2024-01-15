const fs=require('fs')
//const write=require("wr")
const first=fs.readFileSync('./Container/SubConatiner/first.txt','utf8');
console.log(first);
const second=fs.readFileSync("./Container/SubConatiner/second.txt",'utf8')
console.log(second);
const third =fs.writeFileSync('./Container/third.txt',
`Content of first text file ${first} and second file ${second}`
,{flag:'a'})
