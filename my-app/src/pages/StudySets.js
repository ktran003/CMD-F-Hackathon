import { Link } from "react-router-dom"
import React from "react"
import './StudySets.css'

export const StudySets = () => {
    return (
    <div>
        <h1>MY STUDY SETS</h1>
        <h2>MY STUDY SETS</h2>
        <h3> name class date created</h3>
        <p>Human Anatomy           BIO 193                 03/12/2023</p>
        <p>World War 1             HIST 235                03/08/2023</p>
        <p>East Asia               GEOG 121                03/08/2023</p>
        <Link to="/textsummarizer">
         <button>
            MAKE NEW STUDY SET
         </button>
        </Link>
    </div>
    )
}

export default StudySets