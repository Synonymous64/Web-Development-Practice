const express = require("Express");
const app = express();
const port = 180;
app.get("/",( res)=>{
    res.send("This is my new app created with the help of harry")
})

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})
// /home/synonymous/Desktop/Web Development Bootcamp/Express/app.js