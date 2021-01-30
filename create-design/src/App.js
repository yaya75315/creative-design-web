import logo from './logo.svg';
import './App.css';
import './public/common.css'
import './public/homePage.css'
import NavBar from './NavBar'

function App() {



  return (
    <div className="App">
      <div className="homeContent">
        <div className="homeContainer" >
          <NavBar />
          <div className="insideContent">
          </div>
        </div>
        <div className="videoContainer" >
        </div>
      </div>
    </div>
  );
}

export default App;
