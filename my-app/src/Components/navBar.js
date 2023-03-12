import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

function NavBar(){
  return (
    <header className= "header">
    <div className = "logo">
        </div>
        <nav> 
            <ul>
                <a href="/timer">TIMER</a> |
                <a href="/home">HOME</a> |
                <a href="/garden">MY GARDEN</a> |
                <a href="/friends">MY FRIENDS</a>
            </ul>
        </nav>
        <div>
    </div>
    </header>
  )
}

export default NavBar