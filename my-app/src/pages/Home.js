import TextSummarizer from "./TextSummarizer"
import React from "react"
import { Link } from "react-router-dom"

 export const Home = () => {
    return (
    <div>
        <Link to="/studysets">
         <button>
            Button
         </button>
        </Link>
    </div>
    )
}

export default Home
