import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import { FaBehance } from "react-icons/fa";
// import './navbar.css'
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

import { NavData } from './navData';

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const location = useLocation()
    const { hash, pathname, search } = location;


    return (
        <>
            <div className={"link-transition" + (click ? " show-responsive-nav" : "")}>


                <div className="js-responsive-nav">
                    <div className="responsive-nav has-social">
                        <div className="close-responsive-click-area js-close-responsive-nav" onClick={closeMobileMenu}>
                            <div className="close-responsive-button" />
                        </div>
                        <nav className="nav-container" data-hover-hint="nav" data-hover-hint-placement="bottom-start">
                            <div className="page-title">
                                <Link to="/about" className={(pathname == "/about") ? "active" : ""} onClick={closeMobileMenu}>About</Link>
                            </div>
                            <div className="gallery-title"><Link className={(pathname == "/") ? "active" : ""} to="/" onClick={closeMobileMenu}>Work</Link></div>
                        </nav>
                        <div className="social pf-nav-social" data-context="theme.nav" data-hover-hint="navSocialIcons" data-hover-hint-placement="bottom-start">
                            <ul>
                                {/* <li>
                                    <a href="https://www.behance.net/diyoof" target="_blank">
                                        <FaBehance
                                            style={{ width: "22px", height: "22px" }}
                                            xmlSpace="preserve"
                                            className="icon"
                                        />
                                    </a>
                                </li> */}
                                <li>
                                    <a href="https://www.linkedin.com/in/thereforediyoof/" target="_blank">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 24" style={{ enableBackground: 'new 0 0 30 24' }} xmlSpace="preserve" className="icon">
                                            <path id="path-1_24_" d="M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4
                        c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7
                        C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/therefore.diyoof/" target="_blank">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 24" style={{ enableBackground: 'new 0 0 30 24' }} xmlSpace="preserve" className="icon">
                                            <g>
                                                <path d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                          c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6
                          c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6
                          c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9
                          c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4
                          c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9
                          c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4
                          c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9
                          c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z">
                                                </path>
                                                <path d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7
                          c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z" />
                                                <path d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z" />
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:diyoofbn@gmail.com">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 24" style={{ enableBackground: 'new 0 0 30 24' }} xmlSpace="preserve" className="icon">
                                            <g>
                                                <path d="M15,13L7.1,7.1c0-0.5,0.4-1,1-1h13.8c0.5,0,1,0.4,1,1L15,13z M15,14.8l7.9-5.9v8.1c0,0.5-0.4,1-1,1H8.1c-0.5,0-1-0.4-1-1 V8.8L15,14.8z">
                                                </path>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <header
                    className="site-header js-site-header js-fixed-nav"
                    data-context="theme.nav"
                    data-hover-hint="nav"
                    data-hover-hint-placement="top-start"
                >
                    <nav
                        className="nav-container"
                        data-hover-hint="nav"
                        data-hover-hint-placement="bottom-start"
                    >
                        <div className="page-title">
                            <Link to="/about" className={(pathname == "/about") ? "active" : ""}>About</Link>
                        </div>
                        <div className="gallery-title">
                            <Link to="/" className={(pathname == "/") ? "active" : ""}>
                                Work
                            </Link>
                        </div>
                    </nav>
                    <div
                        className="logo-wrap"
                        data-context="theme.logo.header"
                        data-hover-hint="logo"
                        data-hover-hint-placement="bottom-start"
                    >
                        <div className="logo e2e-site-logo-text logo-text  ">
                            <Link to="/" className="preserve-whitespace">
                                Diyoof Bin Nizar
                            </Link>
                        </div>
                    </div>
                    <div
                        className="social pf-nav-social"
                        data-context="theme.nav"
                        data-hover-hint="navSocialIcons"
                        data-hover-hint-placement="bottom-start"
                    >
                        <ul>
                            {/* <li>
                                <a href="https://www.behance.net/diyoof" target="_blank">
                                    <FaBehance
                                        style={{ width: "22px", height: "22px" }}
                                        xmlSpace="preserve"
                                        className="icon"
                                    />
                                </a>
                            </li> */}
                            <li>
                                <a href="https://www.linkedin.com/in/thereforediyoof/" target="_blank">
                                    <svg
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 30 24"
                                        style={{ enableBackground: "new 0 0 30 24" }}
                                        xmlSpace="preserve"
                                        className="icon"
                                    >
                                        <path
                                            id="path-1_24_"
                                            d="M19.6,19v-5.8c0-1.4-0.5-2.4-1.7-2.4c-1,0-1.5,0.7-1.8,1.3C16,12.3,16,12.6,16,13v6h-3.4
                  c0,0,0.1-9.8,0-10.8H16v1.5c0,0,0,0,0,0h0v0C16.4,9,17.2,7.9,19,7.9c2.3,0,4,1.5,4,4.9V19H19.6z M8.9,6.7L8.9,6.7
                  C7.7,6.7,7,5.9,7,4.9C7,3.8,7.8,3,8.9,3s1.9,0.8,1.9,1.9C10.9,5.9,10.1,6.7,8.9,6.7z M10.6,19H7.2V8.2h3.4V19z"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/therefore.diyoof/" target="_blank">
                                    <svg
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 30 24"
                                        style={{ enableBackground: "new 0 0 30 24" }}
                                        xmlSpace="preserve"
                                        className="icon"
                                    >
                                        <g>
                                            <path
                                                d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                    c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6
                    c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6
                    c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9
                    c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4
                    c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9
                    c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4
                    c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9
                    c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z"
                                            ></path>
                                            <path
                                                d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7
                    c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z"
                                            />
                                            <path d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:diyoofbn@gmail.com">
                                    <svg
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 30 24"
                                        style={{ enableBackground: "new 0 0 30 24" }}
                                        xmlSpace="preserve"
                                        className="icon"
                                    >
                                        <g>
                                            <path d="M15,13L7.1,7.1c0-0.5,0.4-1,1-1h13.8c0.5,0,1,0.4,1,1L15,13z M15,14.8l7.9-5.9v8.1c0,0.5-0.4,1-1,1H8.1c-0.5,0-1-0.4-1-1 V8.8L15,14.8z"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger-click-area js-hamburger" onClick={handleClick}>
                        <div className="hamburger">
                            <i />
                            <i />
                            <i />
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default NavBar;