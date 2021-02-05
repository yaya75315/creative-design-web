import './public/common.css'
import './public/homePage.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'

import MainPage from './viewpages/MainPage'
import CoursePage from './viewpages/CoursePage'
import KnowUsPage from './viewpages/KnowUsPage'
import TeacherPage from './viewpages/TeacherPage'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {



  return (
    <Router>
      <div className="App">
        <div className="homeContent">
          <div className="homeContainer" >
            <NavBar />
            <div className="insideContent">
              <Switch>
                  <Route path ="/" exact component = {MainPage}/>
                  <Route path="/CoursePage" component = {CoursePage}/>
                  <Route path="/KnowUsPage" component = {KnowUsPage}/>
                  <Route path="/TeacherPage" component = {TeacherPage}/>
              </Switch>
              <Contact />
            </div>
            <Footer />
          </div>
          <div className="videoContainer" >
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
