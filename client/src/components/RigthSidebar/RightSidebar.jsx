import React from 'react'
import  './RightSidebar.css' 
import Widget from '../../components/RigthSidebar/Widget'
import WidgetTags from '../../components/RigthSidebar/WidgetTags'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget/>
        <WidgetTags/>         
    </aside>
  )
}

export default RightSidebar