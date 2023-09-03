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
import Email from '../src/Pages/Chatbot/Email.jsx'
import Otp from '../src/Pages/Chatbot/Otp.jsx'
import Chatbot from './Pages/Chatbot/Chatbot.jsx'

const AllRoutes = () => {
  return (
    
    
      <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/Auth' element = {<Auth/>} />
            <Route path='/Questions' element = {<Questions/>} />
            <Route path='/AskQuestion' element = {<AskQuestion/>} />
            <Route path='/Questions/:id' element = {<DisplayQuestion/>} />
            <Route path='/Tags' element = {<Tags/>} />
            <Route path='/Email' element = {<Email/>} />
            <Route path='/Otp' element = {<Otp/>} /> 
            <Route path='/Chatbot' element = {<Chatbot/>}/>
            <Route path='/Users' element = {<Users/>} />
            <Route path='/Users/:id' element = {<UserProfile/>} />  
      </Routes>
  
  )
}

export default AllRoutes