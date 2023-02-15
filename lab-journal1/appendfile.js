const content = "+'Next Time'"
const fs = require('fs')
fs.appendFile('test.js',content, err =>{
    if(err){
        console.error(err);
        return
    }
})