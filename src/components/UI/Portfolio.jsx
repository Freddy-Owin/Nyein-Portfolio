import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
function Portfolio () {
    const [portfolio, setPortfolio] = useState(data);
    const [select ,setSelect] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveID(id);
    }
    useEffect(() => {
        if (select === "All") {
            setPortfolio(data);
        } 
        if (select == "Education") {
            const filterData = data.filter(item => item.category == "Education");
            setPortfolio(filterData);
        }
        if (select == "Experiences") {
            const filterData = data.filter(item => item.category == "Experiences");
            setPortfolio(filterData);
        }
    }, [select]);
    return (
        <section id="portfolio">
            <div className="container">
                <div className="flex items-center justify-between flex-warp">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-[2rem] font-[700]">Experiences and Education</h3>
                    </div>
                    
                    <div className="flex gap-3">
                        <button onClick={() => setSelect("All")} className="px-4 py-2 border border-solid rounded-[8px]">All</button>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => setSelect("Education")} className="px-4 py-2 border border-solid rounded-[8px]">Education</button>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => setSelect("Experiences")} className="px-4 py-2 border border-solid rounded-[8px]">Experiences</button>
                    </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                    {
                        portfolio.map((item, index) => (
                            <div key={item.id} data-aos-duration="1000" data-aos="fade-zoom-in" data-aos-delay="50" className="max-w-full flex justify-center group sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]">
                                <figure>
                                    <img className="rounded-[8px]" src={item.image} alt="portfolio" />
                                </figure>

                                <div className="absolute top-0 left-0 w-full h-full bg-violet-800 bg-opacity-40 z-[5] hidden group-hover:block">
                                    <div className="flex items-center justify-center w-full h-full">
                                        <button onClick={()=> showModalHandler(item.id)} className="px-4 py-2 bg-black text-white rounded-[8px] hover:bg-blue-900 font-[500] ease-in duration-200">See Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }
        </section>
    )
}
export default Portfolio;