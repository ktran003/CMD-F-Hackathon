import { Link } from "react-router-dom"
import React from "react"
import './StudySets.css'

export const StudySets = () => {
    return (
    <div className="study">
        <h1>MY STUDY SETS</h1>
        <h2>MY STUDY SETS</h2>
        <h4><h3><span className= 'studysets'>name</span>class</h3>date created</h4>
        <pre>
            Human Anatomy           BIO 193                 03/12/2023
            World War 1             HIST 235                03/08/2023
            East Asia               GEOG 121                03/08/2023
        </pre>
        <Link to="/textsummarizer">
         <button>
            MAKE NEW STUDY SET
         </button>
        </Link>
    </div>
    )
}

export default StudySets