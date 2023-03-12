import TextSummarizer from "./TextSummarizer"
import React from "react"
import { Link } from "react-router-dom"
// import './pages/Home.css';
import './Home.css';

 export const Home = () => {
    return (
    <div className="home">
        <div className="titleArea">
            <h1> 4 hours 30 minutes</h1>
            <p>spent studying on Pomo's Paradise</p>
        </div>
        <div className="timerArea">
            <button class="timerButton">CHECK TIMER</button>
        </div>
        <div className="studyArea">
            <h3>my study sets</h3>
            <hr></hr>
            <pre>name     class      date created</pre>
            <pre>name     class      date created</pre>
            <pre>name     class      date created</pre>
            <pre>name     class      date created</pre>
            <pre>name     class      date created</pre>
            <pre>name     class      date created</pre>
            <Link to="/studysets">
            <button class="moreButton">
                MAKE MORE
            </button>
            </Link>
        </div>
        <hr></hr>
        <div className="chatArea">
            <Link to="/chatbox">
            <button>
                STUDY WITH POMO
            </button>
            </Link>
            <Link to="/chatbox">
            <button className="bigButton">
                &gt;
            </button>
            </Link>
        </div>
    </div>
    )
}

export default Home
