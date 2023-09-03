import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import './Otp.css'
const Otp = () => {
  

  const baseUrl = 'http://localhost:5000'
  const API = (`${baseUrl}/verifyOtp`)

  const [otp, setOtp] = useState("");
  const location = useLocation();

  const navigate = useNavigate();
  const Verifyuser = async(e) => {
    e.preventDefault();

    if(otp === ""){
      toast.error("Enter Your Otp")
    }else if(!/[^a-zA-Z]/.test(otp)){
      toast.error("Enter Valid Otp")
    }else if(otp.length < 6){
      toast.error("Otp length minimum 6 digit")
    }else{
      const data = {
        otp, email:location.state
      }

      const res = await fetch(`${API}`,{
     method : "POST",
     body : JSON.stringify(data),
     headers: {
          'Content-Type': 'application/json'
         },
        })

     .then(response => response.json())
      .then(data => {
       console.log('Success:', data);
      navigate('/Chatbot');
     })
 .catch((error) => {
 console.error('Error:', error);
 });
    }
  }

//   let datasend = {
//     email : email
//   }

//   const res = await fetch(`${API}`,{
//     method : 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(datasend)
//   })


//   .then(response => response.json())
// .then(datasend => {
// console.log('Success:', datasend);
// navigate('/Otp')
// })
// .catch((error) => {
// console.error('Error:', error);
// });
  return (
    <div className="otp-container-2">
    <form onSubmit  = {Verifyuser} style={{ alignItems: "center", marginTop: "30%" }}>
      <h4 style={{fontFamily:'cursive'}}>Please enter your otp.</h4>
      <input
        type="text"
        name="otp"
        onChange={(e) => setOtp(e.target.value)}
        placeholder="OTP"
        required
        className="otp"
      /><br/>
      <button type="submit"  onClick={Verifyuser} className="otp-button"><b>Submit</b></button>
    </form>
    <ToastContainer/>
    </div>
  );
};

export default Otp;
