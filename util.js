const jwt = require('jsonwebtoken')
const TOKEN_SECRET = "MySecretkey"

function generateToken(employee){
    return jwt.sign({_id:employee._id}, TOKEN_SECRET)
}

function verifyAuth(req,res,next){
    //const token = req.header('auth-token')
    const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  
    if(!token) return res.status(401).json({message:'Access Denied.'})

try{console.log(token);
    const verified = jwt.verify(token,TOKEN_SECRET)
    //console.log(verified);
    //{ empid: 136, iat: 1699822640, exp: 1699826240 }
    //an employee with ID 136, and it has an issuance time (iat) and an expiration time (exp)
    req.employee = verified
    next()
}catch(err){
    res.status(400).json({message:'Invalid Token'})
}
}
module.exports = {generateToken, verifyAuth,TOKEN_SECRET}