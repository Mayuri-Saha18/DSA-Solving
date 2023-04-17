import React from 'react'
import "./HomePage.css"

export const HomePage = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/signup'>Sign-Up</a>
                </li>
                <li>
                    <a href='/login'>Login</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
