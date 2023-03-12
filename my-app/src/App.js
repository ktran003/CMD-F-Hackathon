// import logo from './logo.svg';
import './App.css';
import MyFriends from './pages/MyFriends';
import MyGarden from './pages/MyGarden';
import Home from './pages/Home';
import CohereSummary from './Components/CohereSummary';
import NavBar from './Components/NavBar';
// import CohereSummary from './Components/CohereSummary';
import UploadText from './Components/UploadText';

function App() {
  let Component 
  switch (window.location.pathname) {
    case "/home":
      Component = Home
      break
    case "/friends":
      Component = MyFriends
      break
    case "/garden":
      Component = MyGarden
      break
  }
  return (
    <>
    <NavBar/>
    <div className="App">
    <div className= "container">{Component}</div>
    <Component/>
    <UploadText />
    </div>
    </>

  );
}
export default App;

