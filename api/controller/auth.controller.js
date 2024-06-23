import bycrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import jwt from 'jsonwebtoken'
export const register = async(req, res) =>{
    //db operation
const {username, password, email} = req.body
try{
    // hash the password
const hashedPassword = await bycrypt.hash(password, 10)
const newUser = await prisma.user.create({
    data:{
        username,
    email,
password:hashedPassword
}
});
// console.log(newUser)
res.status(201).json({ message:"User has been created successfully!"})
}catch{
    res.status(500).json({ message:"Failed  to create user!"})

}
}
export const login = async(req, res) =>{
    const {username, password} = req.body

try {
    //check if the user exist 
    const user = await prisma.user.findUnique({
        where: {username}
    })
    if(!user) return res.status(401).json({messege:"Invalid Credentials!"})
    //check if the password correct 
const isPasswordValid = await bycrypt.compare(password, user.password)
if(!isPasswordValid) return res.status(401).json({messege:"Invalid Credentials!"})
    //generate cookie token and send to the user
    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success")
    const age = 1000 * 60 * 60 * 24 * 7;
const token = jwt.sign({
    id : user.id,
    isAdmin: false,    
}, process.env.JWT_SECRET_KEY,
{ expiresIn: age})
const {password:userPassword, ...userInfo} = user
    res.cookie('token',token,{
httpOnly:true,
// secure:true
maxAge:age
}).status(200).json({userInfo})
} catch (error) {
    console.log(error)
res.status(500).json({message:'failed to login!'})
}
}
export const logout = (req, res) =>{
    res.clearCookie("token").status(200).json({message:"Logout Successful"})
}