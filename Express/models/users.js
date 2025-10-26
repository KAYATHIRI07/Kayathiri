const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    _id:Number,
    name:String,
    age:Number,
    email:String
})

module.exports=mongoose.model('users',UserSchema)