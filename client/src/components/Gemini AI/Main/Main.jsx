import React, { useContext } from 'react'
import './Main.css'
import photo from '../../../assests/photo.svg'
import send from '../../../assests/send.svg'
import mic from '../../../assests/mic.svg'
import { Context } from '../../../context/Context'
import gemini_icon from '../../../assests/gemini_icon.webp'

const Main = () => {

    const {onSent, recentPrompt, showResults, loading, resultData, setInput,input}  = useContext(Context)




  return (
    <div className='main'>
        <div className="nav">
            <p>Hey there, ILAM here.</p>
        </div>
        <div className="main-container">

        {!showResults 
        ? <>
         <div className="greet">
                <p><span>Hello, Dev. </span>    
                  How can I help you Today?
                </p>
                
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful places to see on an upcoming Trip</p>
                </div>
                <div className="card">
                    <p>Suggest me some innovative ideas for project.</p>
                </div>
                <div className="card">
                    <p>What is gemini?</p>
                </div>
                <div className="card">
                    <p>Which trip is best in winter?</p>
                </div>
            </div>
        </> :
            <div className="result">
                <div className="result-title">
                    {/* <img src={assets.user} alt="" /> */}
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={gemini_icon} alt="" /> 
                    {loading ? 
                         <div className="loader">
                         <hr />
                         <hr />
                         <hr />
                     </div>: <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                    }   
                </div>
                </div>
        }

           
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)}  value={input}
                     type='text' placeholder='Enter a Prompt Here.'/>
                    <div>
                        <img src={photo} alt="gallery icon" />
                        <img src={mic} alt="mic" />
                      {input ? <img src={send} alt="send" onClick={()=> onSent()} /> : null}
                    </div>
                </div>
                <p className='bottom-info'>
                    I can display inaccurate info, including about people, so double-check its responses.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main