import { faArrowPointer, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
function Header () {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }
    useEffect(() => {
        stickyHeaderFunc();
        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[]);
    const handleClick = e => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            top: location - 80,
            left: 0
        })
    }
    const toggleMenu = () => menuRef.current.classList.toggle("show__menu")
    return (
        <header className="w-full h-[80px] leading-[80px] flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[40px] h-[40px] bg-violet-500 text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
                            ATN
                        </span>
                        <div className="leading-[20px]">
                            <h1 className="text-xl text-blue-900 font-[700]">Aye Thinzar Nyein</h1>
                            <p className="text-[16px] font-[500] text-blue-900">Perosnal</p>
                        </div>
                    </div>

                    <div onClick={toggleMenu} ref={menuRef} className="menu">
                        <ul className="flex items-center gap-10">
                            <li>
                                <a onClick={handleClick} className="text-blue-900 font-[600]" href="#about">About</a>
                            </li>
                            <li>
                                <a onClick={handleClick}  className="text-blue-900 font-[600]" href="#services">Services</a>
                            </li>
                            <li>
                                <a onClick={handleClick} className="text-blue-900 font-[600]" href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a onClick={handleClick}  className="text-blue-900 font-[600]" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <button href="#contact" onClick={handleClick} className="flex items-center gap-2 text-blue-900 font-[600] border border-solid border-blue-900 py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-blue-900 hover:text-white hover:font-[500] ease-in duration-300">
                            <FontAwesomeIcon icon={faArrowPointer} flip="horizontal"/>Talk
                        </button>
                        <span onClick={toggleMenu} className="text-2xl text-blue-900 cursor-pointer md:hidden">
                            <FontAwesomeIcon icon={faBars}/>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;