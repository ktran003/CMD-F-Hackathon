import './App.css';
import MyFriends from './pages/MyFriends';
import MyGarden from './pages/MyGarden';
import Home from './pages/Home';
import UploadText from './Components/UploadText';
import NavBar from './Components/NavBar';

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
    default:
      Component = Home
  }
  return (
    <>
    <NavBar/>
    <div className="App">
    <div className= "container">{Component}</div>
    <Component/>
    <UploadText/>
    </div>
    </>

  );
}
export default App;

