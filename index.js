
const { json } = require("node:stream/consumers");
const Emp = require("./employee");
const fs = require('node:fs');
const { stringify } = require("node:querystring");

const e1 = new Emp("Moshe", 30, 1);
const e2 = new Emp("Dana", 25, 2);
const e3 = new Emp("Yossi", 40, 3);

//1 
try{
 fs.writeFileSync(`emp1.txt`, JSON.stringify(e1, null, 2));
    console.log("emp 1 success");
    
}
catch (error){
    console.error("emp 1 error", error);
}


