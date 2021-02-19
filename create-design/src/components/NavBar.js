import React, { useEffect, useState } from 'react'
import '../public/NavBar.css'
import { Link } from 'react-router-dom';
import { gsap, Power3 } from 'gsap';
import { ReactComponent as MenuIcon } from '../public/images/menu.svg'
import { ReactComponent as CloseMenu } from '../public/images/x.svg'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    useEffect(() => {
        gsap.from(
            '.nav',
            2,
            { y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.8 },
            'Start'
        );
    }, [])
    return (
        <div className="nav">


            <ul className={click ? "nav-options  active" : "nav-options"}>
                <li onClick={closeMobileMenu}><Link to="/KnowUsPage">認識創設</Link></li>
                <li onClick={closeMobileMenu}><Link to="/CoursePage">課程介紹</Link></li>
                <li onClick={closeMobileMenu}><Link to="/TeacherPage">師資介紹</Link></li>

            </ul>

            <div className="navLogo" onClick={closeMobileMenu}>
                <Link to="/"><p>臺北科技大學<br />創意設計學士班</p></Link>
            </div>

            <div className="burgerIcon" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                        <MenuIcon className="menu-icon" />
                    )}
            </div>
        </div>
    )
}

export default NavBar
