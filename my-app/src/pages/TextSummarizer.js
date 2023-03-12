import React from "react"
import UploadText from "../Components/UploadText"
import { Link } from "react-router-dom"
// import './pages/TextSummarizer'

export default function TextSummarizer() {
    return (
    <div>
        <h1>TextSummarizer</h1>
    <div>
        <UploadText></UploadText>
        
    </div>
    <Link to="/Chatbox">
         <button class="moreButton">
            STUDY WITH POMO
         </button>
        </Link>
    </div>
    )
}