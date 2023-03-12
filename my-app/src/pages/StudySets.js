import { Link } from "react-router-dom"
import React from "react"
import './page/StudySets'

export const StudySets = () => {
    return (
        <div>
        <Link to="/textsummarizer">
         <button>
            Create
         </button>
        </Link>
    </div>
    )
}

export default StudySets