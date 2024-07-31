import React from 'react'
import SideBar from './SideBar/SideBar'
import Main from './Main/Main'
import './Mount.css'

const Mount = () => {
  return (
    <div className='leftsidebar-container-1'>
          <SideBar />
        <div className='home-container-2'>
          <Main/>
      </div>
    </div>


  )
}

export default Mount