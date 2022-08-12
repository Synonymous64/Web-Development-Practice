//* Builtin Modules in Javascript
const fs = require("fs");
let text = fs.readFileSync("NODE JS/sample.txt","utf-8");
text = text.replace("page", "paper");
console.log("The content of the file is - : ");
console.log(text);
console.log("Creating a new file...");
fs.writeFileSync("NODE JS/Praj.txt",text);