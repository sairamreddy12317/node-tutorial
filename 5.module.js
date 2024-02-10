const {sai,ram} = require('./1-module');
const sayHi = require('./2-module');
const data=require("./3-alternative-export-module");

console.log("---data",data)

require("./4.mind-granide")
sayHi(sai);
sayHi(ram);