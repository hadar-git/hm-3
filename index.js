const Emp = require("./employee");
const fs = require('node:fs');

const e1 = new Emp("Moshe", 30, 1);
const e2 = new Emp("Dana", 25, 2);
const e3 = new Emp("Yossi", 40, 3);

//1 
try{
 fs.writeFileSync(`./employee-data/emp1.txt`, JSON.stringify(e1, null, 2));
    console.log("emp 1 success");
    
}
catch (error){
    console.error("emp 1 error", error);
}

//2

    fs.writeFile(`./employee-data/emp2.txt`, JSON.stringify(e2, null, 2) , (err)=>
{
    if(err)
    { console.log("ERROR", err) ;}
    else{console.log("great");
    }
})

//3


 fs.promises.writeFile(`./employee-data/emp3.txt`, JSON.stringify(e3, null, 2))
.then( ()=> {
   console.log("third emp is innnnn");
})
.catch ( (err)=>   {
    console.log("nope");
    
})

