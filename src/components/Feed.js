import React from 'react';
import './Feed.css';

export default function Feed({users}) {
  return (
     <div className='users'>
   {users.map(user => {
return (
  <div className='userCard'>
    <div>
  <p>{user.username} </p>
  <img src= {user.pic} alt="img" />
    </div>
  <div>
  <p>{user.city}</p>
  </div>
  </div>
)
})}
    </div> 
  )
}
