import TextSummarizer from "./TextSummarizer"
import React from "react"
import { Link } from "react-router-dom"
// import './pages/Home.css';

 export const Home = () => {
    return (
    <div>
        <div class="rectangle"></div>
        <ul>
            <button>CHECK TIMER</button>
        </ul>
        <Link to="/studysets">
         <button>
            CREATE A STUDY SET
         </button>
        </Link>
        <Link to="/chatbox">
         <button>
            STUDY WITH POMO
         </button>
        </Link>
    </div>
    )
}

export default Home
