import React from 'react';
import '../components/Home.css'
import Hobbies from "../components/Hobbies.js"

export default function Home() {
  return (
    <div className="home">
        <div>
        <h2>"Creativity is intelligence having fun."</h2>
        </div>
        <div>
        <p>Being creative is not a hobby. It's a way of life.</p>
        </div>
        <Hobbies />
    </div>
  )
}
