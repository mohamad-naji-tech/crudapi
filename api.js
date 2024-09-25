import {config} from 'dotenv'
import express from 'express'
config()
console.log(process.env.db_uri)
import {creatstudent,deleteStudents,returnallstudents,returnOnestudents} from "./CRUD.js"
//await creatstudent();
const app=express();
app.use(express.json())
app.get('',(req,res)=>
{
    res.send("hello mohamad naji")
})
app.post('/addstudent',async(req,res)=>{
    await creatstudent(req.body)
    res.send("ok")
})

app.delete('/addstudent',async(req,res)=>{
    await deleteStudents(req.body.name)
    res.send("ok")})


app.get('/addstudent',async(req,res)=>{
      let data=  await returnallstudents()
        res.send(data)})

  
app.get('/findOnestudent',async(req,res)=>{
    let data=  await returnOnestudents(req.body.name)
      res.send(data)})      

app.listen(process.env.port)