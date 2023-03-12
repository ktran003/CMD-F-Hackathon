import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MyFriends from '../pages/MyFriends'
import MyGarden from '../pages/MyGarden'
import TextSummarizer from '../pages/TextSummarizer'
import Timer from '../pages/Timer'
import StudySets from '../pages/StudySets'

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/myfriends' element={<MyFriends/>}></Route>
            <Route exact path='/mygarden' element={<MyGarden/>}></Route>
            <Route exact path='/textsummarizer' element={<TextSummarizer/>}></Route>
            <Route exact path='/timer' element={<Timer/>}></Route>
            <Route exact path='/studysets' element={<StudySets/>}></Route>
        </Routes>
    )
}

export default Main