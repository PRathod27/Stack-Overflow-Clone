import { useState } from 'react';
import React from 'react'
import './Chatbot.css';

const Chatbot = () => {

        const[input,setInput] = useState('');
        
  return (
    <div className='container-chatbot' style={{alignItems : 'center'}}>
                <h1 style={{marginTop : '65px', padding : '10px',textAlign :'center'}}>Ask Your queries.</h1>
        <section className='first'>
                <form>
                        <input type="text" placeholder="Ask your question." className='int' onChange={(e) => setInput(e.target.value)} /><br></br>
                        <button type='submit' className='btn'><b>Submit</b></button>
                </form>
        </section>
    </div>
  )
}

export default Chatbot