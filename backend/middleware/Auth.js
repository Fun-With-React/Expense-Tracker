
const jwt = require('jsonwebtoken')
const Users = require('../schema/userModel')

const protect = async(req,res,next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
     try{
         token = request.headers.authorization.split(' ')[1]
         const decoded = jwt.verify(token,process.env.JWT_SECRET)
         req.user = Users.findById(decoded.id).select('-password')
         next()
     } catch(error){
         res.status(401)
         throw new Error('Not authorized, token invalid')
     }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, token invalid')
    }
}
module.exports =  protect