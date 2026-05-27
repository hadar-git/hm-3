const Emp = require("./employee");
const fs = require('node:fs');

const e1 = new Emp("Moshe", 30, 1);
const e2 = new Emp("Dana", 25, 2);
const e3 = new Emp("Yossi", 40, 3);

//1 
try{
 fs.writeFileSync(`./employee-data/emp1.txt`, JSON.stringify(e1, null, 2));
    console.log("emp 1 success");
         const data1 = fs.readFileSync(`./employee-data/emp1.txt`, 'utf8');
    console.log("file: emp1.txt: Content of emp1:", data1);

}
catch (error){
    console.error("emp 1 error", error);
}

//2
 e2.val=90;
    fs.writeFile(`./employee-data/emp2.txt`, JSON.stringify(e2, null, 2) , (err)=>
{
    if(err)
    { console.log("ERROR", err) ;}
    else{console.log("great");
const data2 = fs.readFileSync(`./employee-data/emp2.txt`, 'utf8');
        console.log("file: emp2.txt: Content of emp2:", data2);
    }
})

//3


 fs.promises.writeFile(`./employee-data/emp3.txt`, JSON.stringify(e3, null, 2))
.then( ()=> {
   console.log("third emp is innnnn");
   const data3 = fs.readFileSync(`./employee-data/emp3.txt`, 'utf8');
    console.log("file: emp3.txt: Content of emp3:", data3);
})
.catch ( (err)=>   {
    console.log("nope");
    

})

