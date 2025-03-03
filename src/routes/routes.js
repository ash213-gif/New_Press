const { userCreated }=require('../controller/user')
const {UserAuth}=require('../middleware/userAuth')
const express=require('express')
const routes=express.Router()
const multer=require('multer')

const upload= multer({ storage:multer.diskStorage({}) })

routes.post('/userdata', upload.single('UserImg') ,  UserAuth, userCreated )

routes.all('/*',(req,res)=>{
    res.status(404).send({ status: false, message: 'invailed URL' })
})

module.exports=routes

