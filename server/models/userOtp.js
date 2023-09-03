import mongoose from "mongoose";
// import jwt from 'jsonwebtoken'
// const SECRET_KEY = "abcd"
const userOtpSchema = new mongoose.Schema({
    email: {type : String, required : true},
    otp : { type : String, required : true}
});


// userOtpSchema.methods.generateAuthtoken = async function(){
//         try {
//             let newtoken = jwt.sign({_id:this._id},SECRET_KEY,{
//                 expiresIn:'1d'
//             })
//         } catch (error) {
//             res.status(400).json(error)
//         }
// }
//user OTP model
// const userotp = new mongoose.model('userotps',userOtpSchema)
export default mongoose.model('Otp',userOtpSchema)
// export default userotp