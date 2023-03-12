// import logo from './logo.svg';
import './App.css';
import MyFriends from './pages/MyFriends';
import MyGarden from './pages/MyGarden';
import Home from './pages/Home';
import CohereSummary from './Components/CohereSummary';
import NavBar from './Components/NavBar';
// import CohereSummary from './Components/CohereSummary';
import UploadText from './Components/UploadText';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TextSummarizer from './pages/TextSummarizer';
import StudySets from './pages/StudySets';

function App() {   
  return (
    <>
    <NavBar/>
    <div className="App">
      {/* <BrowserRouter> */}
        <Routes>
            <Route exact path='/home' element={<Home/>}></Route>
            <Route exact path='/myfriends' element={<MyFriends/>}></Route>
            <Route exact path='/mygarden' element={<MyGarden/>}></Route>
            <Route exact path='/textsummarizer' element={<TextSummarizer/>}></Route>T
            <Route exact path='/studysets' element={<StudySets/>}></Route>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
    </>

  );
}
export default App;

