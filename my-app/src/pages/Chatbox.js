import React from "react"
import './Chatbox.css'

export default function Chatbox() {
    return (
    <div className="className">
        <div className="POMO">
        <h3>POMO</h3>
        <ul className= "pomotext">
            <p>Hi! I'm Pomo. Lets start studying</p>
            <p>Please enter what study set you'd like to study</p>
        </ul>
        </div>
        <ul className="user">
            <h3>ME</h3>
            <p>Functions of the heart</p>
        </ul>
        <div className="POMO">
        <h3>POMO</h3>
        <ul className= "pomotext">
            <p>How many chambers does the heart have?</p>

        </ul>
        </div>
            <ul className="user">
                <h3>ME</h3>
                <p1>4</p1>
            </ul>
                    <div className="POMO">
        <h3>POMO</h3>
        <ul className= "pomotext">
            <p1>Answer: 4</p1>

        </ul>
        </div>

        <div className="container">
        <ul><input className= "textBox" type='text'></input></ul>
        <button>Enter</button>
        </div>
    </div>
    )
}