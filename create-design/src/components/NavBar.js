import React from 'react'
import '../public/NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    console.log("navBar");
    return (
        <div className="nav">
            <input type="checkbox" id="burger" />
            <div className="navContent">
                <ul className="menu">
                    <Link to="/KnowUsPage"><li>認識創設</li></Link>
                    <Link to="/CoursePage"><li>課程介紹</li></Link>
                    <Link to="/TeacherPage"><li>師資介紹</li></Link>

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
