import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userModel from './models/userSchema.js'
import cors from 'cors'
const app = express()
app.use(express.json())
dotenv.config({ path: "../.env" })

app.use(cors())
const connectDB = async () => {
    try{
  await mongoose.connect(process.env.Mongo_URI)
    console.log('DB CONNECTED')
    }catch(error){
        console.log("DB CONNECT NHI HAO ===>" + error)
    }
    
  
}    

app.get('/',(req,res) =>{
    res.send('hello from the store')
})
app.post('/user',async (req,res) =>{ 


console.log("REQ BODY:", req.body)
    const user = new userModel(req.body)
await user.save()

res.status(200).json({
    status:"All OK",
   message:"user Created Sucessfull"

})

})
app.get('/user',async (req,res) =>{
    const getUsers = await userModel.find()
    res.status(200).json({
        status:"All OK",
        message : "Data Recieved",
        data:getUsers
    })
})





const PORT = process.env.PORT 

app.listen(PORT , () =>{
    console.log(`api listen on port ${PORT}`)
    connectDB()
})
