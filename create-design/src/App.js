import React, { useEffect, useRef } from 'react';

import './public/common.css'
import './public/homePage.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Video from './public/videos/creative-video.mp4'

import MainPage from './viewpages/MainPage'
import CoursePage from './viewpages/CoursePage'
import KnowUsPage from './viewpages/KnowUsPage'
import TeacherPage from './viewpages/TeacherPage'

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';


import { gsap, Power3 } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  let location = useLocation(); //要用useLocation要把Router搬到外面一層讓switich獨立出來
  let originLocation
  const scroller = useRef(null);//利用useRef來取得homeContainer的節點


  useEffect(() => {
    console.log('homeContainer:', scroller.current);
    if (location.pathname !== originLocation) {
      scroller.current.scroll(0, 0)
    }//當路徑發生改變的時候讓homeContainer滾動捲軸到最上面
    gsap.from(
      '.mainPageTitle',
      2,
      { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      'Start'
    );//開啟網頁後跑過一次大標題

    let fades = gsap.utils.toArray('.fadeIn');
    fades.forEach((fades) => {
      console.log('foreach');
      gsap.from(fades, {
        duration: 1.6,
        y: '30',
        opacity: 0,
        ease: Power3.inOut,
        scrollTrigger: {
          scroller: '.homeContainer',
          trigger: fades,
          start: 'top 90%',
          end: 'bottom 60%',
          onRefresh: (progress) => {
            if (location.pathname !== originLocation) {
              progress.progress = 0
              originLocation = location.pathname
            }//當路徑改變的時候重置全部動畫
          },
        },
      })
    })
  }, [location.pathname])

  return (
    <div className="App">
      <div className="homeContent">
        <div className="homeContainer" ref={scroller}>
          <NavBar />
          <div className="insideContent">
            <Switch>
              <Route path="/" component={MainPage} />
              <Route path="/CoursePage" component={CoursePage} />
              <Route path="/KnowUsPage" component={KnowUsPage} />
              <Route path="/TeacherPage" component={TeacherPage} />
            </Switch>
            <Contact />
          </div>
          <Footer />
        </div>
        <div className="videoContainer" >
          <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default App;
