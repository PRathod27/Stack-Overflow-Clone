//send otp user
import otps from "../models/userOtp.js";
import users from "../models/auth.js";
import nodemailer from "nodemailer";
import dotenv from 'dotenv'
// Generate and send OTP to user's email or phone number

dotenv.config();  
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "premrathod2317@gmail.com",
    pass: process.env.PASSWORD,
  },
});

export const userOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ error: "Please Enter Your Email." });
  }

  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existEmail = await otps.findOne({ email: email });

      if (existEmail) {
        const updateData = await otps.findByIdAndUpdate(
          { _id: existEmail._id },
          {
            otp: OTP,
          },
          { new: true }
        );

        await updateData.save();

        var mailOptions = {
          from: "premrathod2317@gmail.com",
          to: email,
          subject: "Sending Email for otp verification",
          text: `OTP:- ${OTP}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent successfully" });
          }
        });
      } else {
        const saveOtpData = new otps({
          email,
          otp: OTP,
        });
        await saveOtpData.save();

        var mailOptions = {
          from: "premrathod2317@gmail.com",
          to: email,
          subject: "Sending Email for otp verification",
          text: `OTP:- ${OTP}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent successfully" });
          }
        });
      }
    } else {
      res.status(400).json({ error: "This User does not exists in our db." });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid details" });
  }
};

export const verifyOtp = async (req,res) => {
    const {otp} = req.body;

    if(!otp){
      res.status(400).json({error:'Please Enter Your Otp'})
    }

    try{
      const otpverification = await otps.findOne({email:email});

      if(otpverification.otp === otp ){
        //  const preuser = await otps.findOne({email : email});

        //  const token = await generateAuthtoken();
        //  console.log(token)
        navigate('/Chatbot')
      } else{
        res.status(400).json({error : 'Invalid otp'})
      }
    }catch(error){
      res.status(400).json({error : 'Invalid Details',error})
    }
} 