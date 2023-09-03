import React , { useEffect }from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import stack from '../../assests/stack.png'
import search from '../../assests/search.svg' 
import Avatar from '../../components/Avatar/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.css'
import decode from 'jwt-decode'
import { setCurrentUser } from '../../actions/currentuser'

const Navbar = () => {

    // var User = JSON.parse(localStorage.getItem('Profile'))
    const dispatch = useDispatch();
    var User = useSelector((state) => state.currentUserReducer);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
      dispatch(setCurrentUser(null));
    };
  
    useEffect(() => {
      const token = User?.token;
      if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          handleLogout();
        }
      }
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    }, [User?.token, dispatch]);
    
  return (
    <nav className='main-nav'>
    <div className='navbar'>
        <Link to = '/' className='nav-item nav-logo'>
            <img src= {stack} alt = 'Logo' width= '140px'></img>
        </Link>
        <Link to = '/' className='nav-item nav-btn'>About</Link>
        <Link to = '/' className='nav-item nav-btn'>Products</Link>
        <Link to = '/' className='nav-item nav-btn'>For Teams</Link>
        <form>
                <input type = "text" placeholder='Search..'/>
                <img src= {search} alt = 'search' width= '14px' className='search-icon'></img>
        </form>
        {
         User === null ?
               <Link to='/Auth' className='nav-item nav-links'>Log in</Link> : 
               <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>
                          <Link to = {`/Users/${User.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link>
                        </Avatar>
                        <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
               </>
        }

    </div>
    </nav>
  )
}

export default Navbar


