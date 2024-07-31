import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from '../../client/src/Pages/Home/Home.jsx'
import Auth from '../../client/src/Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions.jsx'
import AskQuestion from './Pages/AskQuestion/AskQuestion.jsx'
import DisplayQuestion from './Pages/Questions/DisplayQuestion.jsx'
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
// import Gemini from './Pages/Gemini AI/Gemini.jsx'
import Mount from './components/Gemini AI/Mount.jsx'

const AllRoutes = () => {
  return (
    
    
      <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/Auth' element = {<Auth/>} />
            <Route path='/Questions' element = {<Questions/>} />
            <Route path='/AskQuestion' element = {<AskQuestion/>} />
            <Route path='/Questions/:id' element = {<DisplayQuestion/>} />
            <Route path='/Tags' element = {<Tags/>} />
            <Route path='/Users' element = {<Users/>} />
            <Route path='/Users/:id' element = {<UserProfile/>} />  
            <Route path='/AI' element = {<Mount/>}/>
      </Routes>
  
  )
}

export default AllRoutes