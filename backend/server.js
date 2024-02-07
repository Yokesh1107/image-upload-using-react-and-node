const express=require('express')
const app=express()
const mongoose=require('mongoose')
const multer = require('multer')
const cors=require('cors')
app.use(cors())
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})
const upload=multer({storage:storage})
app.get('/',(req,res)=>{
    res.send('New')
})
app.post('/upload',upload.single('newFile'),(req,res)=>{
    res.send('uploaded successfully')
})
app.listen(2003,()=>{
    console.log("Running on port 2003")
})