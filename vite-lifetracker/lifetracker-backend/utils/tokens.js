const jwt = require("jsonwebtoken")
const config = require("./config.js")



const generateToken = (data) => jwt.sign(data, config.SECRET_KEY, {  algorithm: "HS256", expiresIn: 10000})
const createUserJwt =  (user) =>  {
const payloads = {
    email: user.email,
}
return generateToken(payloads)
}
const validateToken = (data) => {
try{
const decoded = jwt.verify(token, config.SECRET_KEY)
 return decoded
} catch(err){
return {}
}
}

createUserJwt
console.log("User key")
module.exports = {
generateToken,
createUserJwt,
validateToken
}
