import React from 'react'
import "../components/Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className='profile_info'>
        <img src="https://i.pinimg.com/280x280_RS/f2/bc/cf/f2bccfe2d804dd173c3e6f75d3e84ed7.jpg" alt="img" />
        <h1>name</h1>
        <p>@username</p>
        <button>Edit Profile</button>
      </div>
      <div className="profile_icons">
        <p>filter icon</p>
        <p>plus icon</p>
      </div>
      <div className="profile_gallery">
        <img src="1" alt="img1" />
      </div>
    </div>
  )
}
