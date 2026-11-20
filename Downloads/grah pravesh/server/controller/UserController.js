const UserModel =require("../model/UserModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const UserSign = async (req,res) => {
     const {fullName,email,password,role} = req.body
    const hashedPassword = await bcryptjs.hash(password,12)
   const userData = await UserModel.create({fullName,email,role,password : hashedPassword})
     res.json(userData)
}

const UserLogin = async (req,res)=>{
   const {email,password} =  req.body
            const UserLoginData = await UserModel.findOne({ email })
              console.log(UserLoginData.password)
              const comp = await  bcryptjs.compare(password,UserLoginData.password)
              if(!comp) {
                  res.json({"err" : "Account not found"})
              }else{
                 let token =  jwt.sign({
                        UserId : UserLoginData._id,
                        role : UserLoginData.role
                    },"king")
                    res.json({token : token})
              }
} 
module.exports = {UserSign,UserLogin}
    
              