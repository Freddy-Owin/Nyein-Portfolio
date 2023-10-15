import React from "react";
import portfolios from "../../assets/data/portfolioData";
function Modal ({activeID, setShowModal}) {
    const portfolio = portfolios.find(portfolio => portfolio.id == activeID)

    return (
        <div className="fixed top-0 left-0 z-10 w-full h-full bg-opacity-4 z-9999">
            <div className="w-11/12 md:w-full md:max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5 border border-black border-[10px]">
                <div className="w-full h-full">
                    <figure className="flex items-center w-full">
                        <img src={portfolio.image} alt="portfolio image" />
                    </figure>
                    <div className="">
                        <h1 className="text-2xl font-[700] my-5">{portfolio.title}</h1>
                        <p>{portfolio.positions}</p>
                        <div className="mt-3">
                            <p>Website Link</p>
                            <a className="text-red-800" href={portfolio.site_url}>{portfolio.site_url}</a>
                        </div>
                    </div>
                </div>
                <button onClick={() => setShowModal(false)} className="w-[1.8rem] h-[1.8rem] bg-black absolute top-[0.5rem] right-[0.5rem] text-[25px] flex items-center justify-center text-white rounded-[3px]">&times;</button>
            </div>
        </div>
    )
}
export default Modal;