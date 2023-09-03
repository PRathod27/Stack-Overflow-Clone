import React from 'react'
import {useSelector} from 'react-redux'
import User from './User'
import './Userss.css'

const UsersList = () => {

    const users = useSelector((state => state.usersReducer))
    console.log(users)
  return (
    <div className='users-list-container'>
        {
            users.map((user) => (
                <User user={user} key = {user?._id}/>
            ))
        }
    </div>
  )
}

export default UsersList