import { faEnvelope, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import nyein_intro from "../../assets/images/profile.jpg"
import React from "react";
import CountUp from "react-countup";
import { faFacebook, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

function Intro() {
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
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="items-center justify-between md:flex sm:flex-col md:flex-row">
                    <div className="w-full md:basis-1/2 ">
                        <h1 data-aos="fade-right" data-aos-duration="1500" className=" font-[600] text-[16px]">Hello Welcome</h1>
                        <h1 data-aos='fade-up' data-aos-duration='1500' className=" font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                            I am Aye Thinzar Nyein 
                            <br/> 
                            Accountant
                        </h1>
                        <div className="flex items-center gap-6 mt-7" data-aos='fade-up' data-aos-duration='1500' data-aos-delay="200">
                            <a>
                                <button href="#contact" onClick={handleClick} className="text-white bg-violet-800 font-[500] flex items-center gap-2 hover:bg-blue-900 ease-in duration-300 py-2 px-4 rounded-[8px]">
                                    <FontAwesomeIcon icon={faEnvelope} /> Hire Me
                                </button>
                            </a>
                            <a href="#portfolio" onClick={handleClick} className="text-blue-900 font-[600] text-[16px] border-b border-solid border-blue-900">See Portfolio</a>
                        </div>
                        <p className="flex gap-2 mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10" data-aos='fade-left' data-aos-duration='1500'>
                            <span>
                                <FontAwesomeIcon icon={faSquare}/>
                            </span>
                            To enhance my professional skills, capabilities and knowledge in an organization which recognizes the value of
                            hard work and trusts me with responsibilities and challenges.I seek challenging opportunities where I can fully use
                            my skills for the success of the organization.
                        </p>
                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-blue-900 text-[15px] font-[600]">Follow Me : </span>
                            <span>
                                <a className="text-[18px] text-blue-700 font-[600]" href="https://www.facebook.com/profile.php?id=100080170322865">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </a>
                            </span>
                            <span>
                                <a className="text-[18px] text-blue-700 font-[600]" href="https://www.facebook.com/profile.php?id=100080170322865">
                                    <FontAwesomeIcon icon={faTelegram}/>
                                </a>
                            </span>
                            <span>
                                <a className="text-[18px] text-blue-700 font-[600]" href="">
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="mt-10 basis-1/3 sm:mt-0" data-aos="fade-down" data-aos-duration="1800">
                        <figure className="items-center justify-center">
                            <img src={nyein_intro} alt="nyein" className="rounded-[100px]" />
                        </figure>
                    </div>

                    <div className="flex justify-between gap-3 mt-10 text-center md:basis1/5 flex-warp md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h1 className="font-[700] text-[32px]">
                                <CountUp start={0} end={4} duration={2} suffix="+"/>
                            </h1>
                            <h1 className="font-[700] text-[18px]">
                                Years of Experiences
                            </h1>
                        </div>
                        <div className="mb-10">
                            <h1 className="font-[700] text-[32px]">
                                <CountUp start={0} end={100} duration={2} suffix="%"/>
                            </h1>
                            <h1 className="font-[700] text-[18px]">
                                Success Rate
                            </h1>
                        </div>
                        <div className="mb-10">
                            <h1 className="font-[700] text-[32px]">
                                <CountUp start={0} end={4} duration={2} suffix="+"/>
                            </h1>
                            <h1 className="font-[700] text-[18px]">
                                Happy Company
                            </h1>
                        </div>
                        <div className="mb-10">
                            <h1 className="font-[700] text-[32px]">
                                <CountUp start={0} end={4} duration={2} suffix="+"/>
                            </h1>
                            <h1 className="font-[700] text-[18px]">
                                Certificates
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intro