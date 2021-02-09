import React,{useEffect} from 'react'
import '../public/NavBar.css'
import { Link } from 'react-router-dom';
import { gsap, Power3 } from 'gsap';

const NavBar = () => {
    useEffect(() => {
        gsap.from(
            '.nav',
            2,
            { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.8 },
            'Start'
        );
    }, [])
    console.log("navBar");
    return (
        <div className="nav">
            <input type="checkbox" id="burger" />
            <div className="navContent">
                <ul className="menu">
                    {/* <Link to="/KnowUsPage"><li>認識創設</li></Link>
                    <Link to="/CoursePage"><li>課程介紹</li></Link>
                    <Link to="/TeacherPage"><li>師資介紹</li></Link> */}
                    <li><Link to="/KnowUsPage">認識創設</Link></li>
                    <li><Link to="/CoursePage">課程介紹</Link></li>
                    <li><Link to="/TeacherPage">師資介紹</Link></li>

                    {/* <li>認識創設</li>
                    <li>課程介紹</li>
                    <li>師資介紹</li> */}
                </ul>
            </div>
            <div className="navLogo">
                <Link to="/"><p>臺北科技大學<br />創意設計學士班</p></Link>
            </div>

            <div className="burgerIcon">
                <label for="burger">☰</label>
            </div>
        </div>
    )
}

export default NavBar
