import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchAllQuestions} from '../src/actions/question'
import { fetchAllusers } from './actions/users';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllusers())
  }, [dispatch])
    return (
      
        <div className='App'>
          <Router>
          <Navbar/>
          <AllRoutes/>
          </Router>
        </div>
     
  ); 
}

export default App;
