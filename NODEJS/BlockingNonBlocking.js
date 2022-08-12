/* 
!Synchronous or Blocking 
*    --- Line by Line Execution
! Asynchronous or unBlocking
*    --- Line by Line Execution not guaranteed
*    -- Callbacks are fire
*/ 
const fs = require("fs");
let text = fs.readFile("NODE JS/sample.txt","utf-8", (err,data)=>{
    console.log(err, data);
});
console.log("This is message");