const express=require('express')
const app=express()

/*app.get('/',(req,res)=>{
    res.send("Hello from express");
})
*/
const mongoose=require('mongoose')
const MONGO_URL='mongodb://127.0.0.1:27017/users'
const Users=require('./models/users')

app.use(express.json())
app.get('/api/users',async(req,res)=>{
    try{
        const users=await Users.find()
        res.json(users)
    }
    catch(error){
        res.status(500).json({msg:'Internal server error'})
    }
})
app.get('/api/users/:id',async(req,res)=>{
    try{
        const id=parseInt(req.params.id)
        const user=await Users.findOne({_id:id})
        if(!user){
            return res.status(401).json({msg:'User with ${id} not found'})
        }
        res.json(user)
    }
    catch(error){
        res.status(500).json({msg:'Internal server error'})
    }
})
app.use(express.urlencoded({extended:false}))
app.post('/api/users',async(req,res)=>{
    try{
        const {_id,name,age,email}=req.body
        const existingUser=await Users.findOne({_id})
        if(existingUser){
            return res.status(400).json({msg:'User with id ${id} already created'})
        }
        const newUser = new Users({_id, name, age, email})
        await newUser.save()
        res.status(201).json({msg:'User created successfully'})
    }
    catch(error){
        res.status(500).json({msg:'Internal server error'})
    }
})

mongoose.connect(MONGO_URL)
.then(()=>console.log('DB connectedsuccessfully'))
.catch((error)=>console.log('Eror:',error))
app.listen(8000,()=>{
    console.log('Server running on 8000')
})