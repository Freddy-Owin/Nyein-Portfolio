import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer () {
    const handleClick = e => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            top: location - 80,
            left: 0
        })
    }
    return (
        <footer className="bg-[#12141e] pt-12">
            <div className="container">
                <div className="items-center justify-between sm:flex md:gap-8">
                    <div className="w-full sm:w-1/2">
                        <h1 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                            Do you want to solve any solution?
                        </h1>
                        <a href="#contact" onClick={handleClick}>
                            <button href="#contact" onClick={handleClick} className="text-white bg-violet-800 font-[500] flex items-center gap-2 hover:bg-blue-900 ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <FontAwesomeIcon icon={faEnvelope} /> Hire Me
                            </button>
                        </a>
                    </div>

                    <div className="w-full sm:w-1/2 ">
                        <p className="mt-4 leading-7 text-gray-300 sm:mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur vel ab rerum accusamus reiciendis explicabo doloremque. Cum repudiandae, quo ut quae similique nihil nobis quas vero optio saepe aperiam?</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#1b1e29] py-5 mt-14">
                <div className="container">
                    <div className="flex items-center justify-center sm:justify-between">
                        <div className="hidden sm:block">
                            <div className="flex items-center gap-[10px]">
                                <span className="w-[40px] h-[40px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">ATN</span>
                                <div className="leading-[20px]">
                                    <h1 className="text-gray-200 font-[500] text-[18px]">Aye Thinzar Nyein</h1>
                                    <p className="text-gray-400 font-[500] text-[14px]">Personal</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;