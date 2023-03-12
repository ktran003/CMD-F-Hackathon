import { Link } from "react-router-dom"
import React from "react"
import './StudySets.css'

export const StudySets = () => {
    return (
    <div className="study">
        <h1>MY STUDY SETS</h1>
        <div className="className">
            <h3>Class</h3>
            <p>Add a description:</p>
        </div>
        <h2>STUDY Cards</h2>
        <div className="studyContainer">
            <div>Add new study card <button>+</button></div>
            <div>Add new study card <button>+</button></div>
            <div>Add new study card <button>+</button></div>
            <div>Add new study card <button>+</button></div>
            <div>Add new study card <button>+</button></div>
        </div>
        <Link to="/textsummarizer">
         <button>
            MAKE NEW STUDY SET  +
         </button>
        </Link>
    </div>
    )
}

export default StudySets