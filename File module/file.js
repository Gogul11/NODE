
const fs = require('fs')

//The below code is for reading file asynchronous

fs.readFile('./text.txt', 'utf8',(err,dat)=>{
    if(err){
        console.log(err)
    }
    
    fs.writeFile('./text2.txt',`${dat}\n content-2`, (err) =>{
        if(err){
            console.log(err)
        }
        console.log("File 2 wirten successfully")
    })
})

//The below code is for reading file synchronous

try{
    fs.writeFileSync('./text3.txt', `${fs.readFileSync('./text.txt', 'utf8')}\n content-3`)
    console.log("File 3 written successfully")
}
catch(err){
    console.log(err)
}