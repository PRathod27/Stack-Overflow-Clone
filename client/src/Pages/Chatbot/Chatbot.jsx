import { useState } from 'react';
import React from 'react'
import axios from 'axios'
import './Chatbot.css';

const Chatbot = () => {

        const[prompt, setprompt] = useState("")
        const [response, setresponse] = useState("")
        
        const handlesubmit = (e) => {
                e.preventDefault();

                axios.post("http://localhost:5000/openai", {prompt})
                .then((res) => {
                        setresponse(res.data);
                }).catch((err) => {
                        console.log(err);
                })
        }

  return (
    <div className='container-chatbot' style={{alignItems : 'center'}}>
                <h1 style={{marginTop : '65px', padding : '10px',textAlign :'center'}}>Ask Your queries.</h1>
        <section className='first'>
                <form onSubmit={handlesubmit}>
                        <input type="text" placeholder="Ask your question." className='int' onChange={(e) => setprompt(e.target.value)} /><br></br>
                        <button type='submit' className='btn'><b>Submit</b></button>
                </form>
        </section>
    </div>
  )
}

export default Chatbot