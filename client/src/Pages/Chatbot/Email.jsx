import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Email.css'

const Verification = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const baseUrl = 'http://localhost:5000'
  const API = (`${baseUrl}/userOtp`)

  const sendEmail = async (e) => {
    e.preventDefault();
      let datasend = {
        email : email
      }

      const res = await fetch(`${API}`,{
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datasend)
      })


      .then(response => response.json())
.then(datasend => {
  console.log('Success:', datasend);
  navigate('/Otp')
})
.catch((error) => {
  console.error('Error:', error);
});
//       .then((res) => {
//         console.log(res);
//         if(res.status === 200){
//           navigate("/Otp",{state : email})
//         }else{
//           console.log("Error")
//         }
//       })
//     };

//     fetch('https://example.com/api/data', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

  }
  
  return (
    <div className='form'>
    <form onSubmit = {sendEmail} style = {{alignItems:'center',marginTop : '30%'}}>
      <input type = 'email' onChange={(e) => setEmail(e.target.value)} required className='email' placeholder='Enter your Email'/><br/>
       <button type="submit" onClick={sendEmail}  className='button'>Generate Otp</button> 
      {/* <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="OTP"
        required
      />
      <button type="submit" onClick={handleVerification}>Login</button> */} 
    </form>
    </div>
  );
};

export default Verification;
