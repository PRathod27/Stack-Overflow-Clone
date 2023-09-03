import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import TagsList from './TagsList.jsx'
import { tagsList } from './tagsList.js'
import './Tags.css'

const Tags = () => {


  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'> A tag is a Keyword or label that categories your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags make it easier for others to find and answer yyour question.</p>
            <div className='tags-list-container'>
                {
                  tagsList.map((tag) => (
                    <TagsList tag = {tag} key = {tagsList.id} />
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tags