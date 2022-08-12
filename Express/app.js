const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

//* For Serving the static files
app.use('/static', express.static('static'))
app.engine('pug', require('pug').__express)
//* set the template engine as pug
app.set('view engine', 'pug')

//* Set the views directory
app.set('views', path.join(__dirname,'views'))

//* Our pug demo endpoint
app.get("/demo",(req, res)=>{
    res.status(200).render('demo', {title : 'Hey Prajwal', message : 'Hello there! Thanks for using pug :)'})
});

app.get("/",(req, res)=>{
    res.status(200).send("This is my new app created with the help of harry")
});
app.get("/about",(req, res)=>{
    res.send("This is my new app created with the help of harry")
});
app.post("/",(req, res)=>{
    res.send("This is my homepage of my first app")
});
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});
