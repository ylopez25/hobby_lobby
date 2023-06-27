import React from 'react'
import './nav.css'
export default function nav() {
  return (
    <div class='nav'>
        <div class='nav_search'>
        <input label='search hobby'></input>
        <button>Search</button>
        </div>
        <div class="nav_home">
            <button>home</button>
        </div>
        <div>
            <button>profile</button>
        </div>
        <div>
            <button>Settings</button>
        </div>

    </div>
  )
}
