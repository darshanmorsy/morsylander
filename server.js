const express = require('express');
const app= express();
const port= 2000


app.post('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,(err)=>{

    if(err){
        console.log(err);
    }else{
        console.log('Server is running on port '+port);
    }

})