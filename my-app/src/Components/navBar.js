import React from 'react'
import './NavBar.css'


function NavBar(){
    const path = window.location.pathname
  return (
    <header className= "header">
    <div className = "logo">
        </div>
        <nav> 
            <ul>
                <li>
                    <a href="/timer" className>TIMER</a>
                </li>
                <CustomLink href="/home">HOME</CustomLink>
                <CustomLink href="/garden">MY GARDEN</CustomLink>
                <CustomLink href="/friends">MY FRIENDS</CustomLink>
            </ul>
        </nav>
        <div>
    </div>
    </header>
  )
}

function CustomLink ({href, children, ...props}) {
    const path = window.location.pathname
    return (
    <li className= {path === href ? "active" : ""}>
        <a href={href} {...props}>{children}</a>
    </li>
    )
}

export default NavBar