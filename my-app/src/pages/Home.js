import TextSummarizer from "./TextSummarizer"
import React from "react"
import { Link } from "react-router-dom"
// import './pages/Home.css';
import './Home.css';

 export const Home = () => {
    return (
    <div class="home">
        <div class="rectangle"></div>
        <ul>
            <button class="timerButton">CHECK TIMER</button>
        </ul>
        <Link to="/studysets">
         <button class="moreButton">
            VIEW MORE
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
