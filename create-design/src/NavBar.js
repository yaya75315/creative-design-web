import React from 'react'
import './public/NavBar.css'
import './public/common.css'
import './public/homePage.css'

const NavBar = () => {
    console.log("navBar");
    return (
        <div className="nav">
            <input type="checkbox" id="burger" />
            <div className="navContent">
                <ul className="menu">
                    <li>認識創設</li>
                    <li>課程介紹</li>
                    <li>師資介紹</li>
                </ul>
            </div>
            <div className="navLogo">
                <p>臺北科技大學<br />創意設計學士班</p>
            </div>

            <div className="burgerIcon">
                <label for="burger">☰</label>
            </div>
        </div>
    )
}

export default NavBar
