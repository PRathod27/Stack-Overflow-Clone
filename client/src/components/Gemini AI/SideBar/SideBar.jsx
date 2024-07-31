import React, { useState } from 'react'
import './SideBar.css'
import New_Chat from '../../../assests/New_Chat.png'
import icon from '../../../assests/icon.svg'
import message_regular from '../../../assests/message_regular.svg'
import { useContext } from 'react'
import { Context } from '../../../context/Context'

const SideBar = () => {

    const[extended, setExtended] = useState(true)
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async(prompt) =>{
            setRecentPrompt(prompt)
           await onSent(prompt)
    }

  return (
    <div className='sidebar'>
        <div className="top">
        <img src={icon} onClick={ () => setExtended( prev => !prev)} alt='' className='menu'/> 
            <div className="new-chat" onClick={() => newChat()}>
                <img src={New_Chat} alt='not available'/>
                {extended ? <p>New Chat</p> : null }
            </div>
            {extended ? <div className="recent">
                <p className="recent-tile">Recent</p>
                {prevPrompts.map((item,index) => {
                    return(
                <div className="recent-entry" onClick={() => loadPrompt(item)}>
                    <img src={message_regular} alt= "not there" className='msg'/>
                    <p>{item.slice(0,18)}</p>
                </div>      
                    )
                })}
                
            </div> : null}   
        </div>

        <div className="bottom">
            {/* <div className="bottom-item recent-entry">
                <img src='' alt='question'></img>
                {extended ? <p>Help</p> : null}
            </div> */}
            <div className="bottom-item recent-entry">
            <img src={New_Chat} alt='not available' style={{marginTop:'11px'}}/>
                {extended ? <p>Activity</p> : null}
            </div>
        </div>  
    </div>
  )
}

export default SideBar