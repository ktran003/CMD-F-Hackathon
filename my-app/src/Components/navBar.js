import React from 'react'
// import './navBar.css'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar(){
  return (
    <header className= "header">
    <div className = "logo">
        </div>
        <nav> 
            <ul>
                <div className="grid-container">
                    <li><Link className= "TIMER" to='/timer'>TIMER</Link></li>
                    <li><Link className= "HOME" to='/home'>HOME</Link></li>
                    <li><Link className= "MY FRIENDS" to='/myfriends'>MY FRIENDS</Link></li>
                    <li><Link className= "MY GARDEN" to='mygarden'>MY GARDEN</Link></li>

                </div>
            </ul>
        </nav>
        <div>
    </div>
    </header>
  )
}

// function CustomLink ({to, children, ...props}) {
//     const path = window.location.pathname
//     return (
//     <li className= {path === to ? "active" : ""}>
//         <Link to={to} {...props}>{children}</Link>
//     </li>
//     )
// }

export default NavBar