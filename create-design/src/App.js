import React, {useEffect}from 'react';

import './public/common.css'
import './public/homePage.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'

import MainPage from './viewpages/MainPage'
import CoursePage from './viewpages/CoursePage'
import KnowUsPage from './viewpages/KnowUsPage'
import TeacherPage from './viewpages/TeacherPage'

import {BrowserRouter as Router, Switch, Route,useLocation} from 'react-router-dom';


import { gsap, Power3 } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  let location = useLocation();
  let originLocation
  // let t1 = new TimelineLite({ delay: 0.1 });
  


  // if(location.pathname != originLocation){
  //         console.log('觸發location.pathname === originLocation');
  //         originLocation = location.pathname
  //         ScrollTrigger.refresh(true)
  //       }
    useEffect(() => {
        console.log(location.pathname);
        gsap.from(
            '.mainPageTitle',
            2,
            { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
            'Start'
        );

        let fades = gsap.utils.toArray('.fadeIn');
        fades.forEach((fades)=> {
          console.log('foreach');
            gsap.from(fades,{
              duration: .7,
              y: '30',
              opacity: 0,
              ease: Power3.easeOut,
              scrollTrigger: {
                  scroller: '.homeContainer',
                  trigger: fades,
                  start: 'top 90%',
                  end: 'bottom 60%',
                  // toggleActions: 'restart complete reverse reset',
                  onRefresh:(progress)=>{
                    // console.log(progress)
                    if(location.pathname != originLocation){
                      progress.progress = 0
                      // console.log(location.pathname);
                      // console.log(progress.progress);
                      originLocation = location.pathname
                    }
                  },
              },
            })
        })
    },[location.pathname])

  return (
      <div className="App">
        <div className="homeContent">
          <div className="homeContainer">
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
  );
}

export default App;
