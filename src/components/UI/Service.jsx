import React from "react";
import bookkeeping from "../../assets/images/bookkeeping.png";
import duplicate from "../../assets/images/duplicate.png";
import excel from "../../assets/images/excel-file.png";
import ledger from "../../assets/images/ledger.png";
function Service () {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h1 className="font-[800] text-[2.4rem] mb-5">What can I do?</h1>
                    <p className="lg:max-w-[600px] lg:mx-auto font-[500] text-[16px] leading-7">
                        I've been experiencing of recording and classification business transactions before summarizing into financial reports. Helping partially for Senior account's preparing report.
                        Using Microsoft and WPS softwares: An Excel report relating to my jobs can be provided as the job requirements, making Word Documents and invoices, presented with different adjustable style by Power Point. 
                    </p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full px-2 py-3 sm:max-w-4xl sm:mx-auto sm:px-0">
                        <div className="relative text-sm antialiased font-semibold text-gray-700">
                            <div className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-indigo-300 sm:block left-1/2"></div>
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-violet-800">
                                                <h1 className="font-[700] mb-3 text-violet-800 group-hover:text-white group-hover:font-[600] text-2xl ">Bookkeeping</h1>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    Different layers of business required an accountant to know business's information for making decisions like daily or mothly transactions include purchases, sales, receipts, payments by an individual person or corporations. Also reviewing for  business's future profit or loss, demonstrations business's financial positions what it possesses and remains to the liability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-white border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                                        <figure>
                                            <img src={bookkeeping} alt="bookkeeping" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-end w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos="fade-left" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-violet-800">
                                                <h1 className="font-[700] mb-3 text-violet-800 group-hover:text-white group-hover:font-[600] text-2xl ">Double Entry</h1>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ratione culpa at, dicta quas animi alias dolorem nostrum labore error cum consequuntur magnam omnis. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-white border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                                        <figure>
                                            <img src={duplicate} alt="duplicate" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-violet-800">
                                                <h1 className="font-[700] mb-3 text-violet-800 group-hover:text-white group-hover:font-[600] text-2xl ">Advanced Excel</h1>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    Most of the career in every developing country like data entry staff, operations, sales admin, warehousing and shipping, logistics, merchandiser,data analysts, accounting and finance jobs based on the skills of ability to use computer basics. Moreover, from the lower level to upper level roles use excel to display relevance lists, summarise diffrent categories and details, use functions and link with different sheets to reports, finally review assumptions and make important decisions.
                                                    As an accountant,Excel report(sales,purchases,inventory,receivable,payable,cash book,general ledger and trial) have been applied by the whole experienced terms.                                        </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-white border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                                        <figure>
                                            <img src={excel} alt="excel" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-end w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos="fade-left" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-violet-800">
                                                <h1 className="font-[700] mb-3 text-violet-800 group-hover:text-white group-hover:font-[600] text-2xl ">General Ledger</h1>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ratione culpa at, dicta quas animi alias dolorem nostrum labore error cum consequuntur magnam omnis. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-white border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                                        <figure>
                                            <img src={ledger} alt="general ledger" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex flex-col items-center sm:flex-row">
                                    <div className="flex items-center justify-start w-full mx-auto">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos="fade-right" data-aos-duration="1200" className="p-4 duration-150 ease-in bg-white rounded shadow cursor-pointer group hover:bg-violet-800">
                                                <h1 className="font-[700] mb-3 text-violet-800 group-hover:text-white group-hover:font-[600] text-2xl ">-</h1>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ratione culpa at, dicta quas animi alias dolorem nostrum labore error cum consequuntur magnam omnis. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-white border-4 border-white rounded-full left-1/2 sm:translate-y-0">
                                        <figure>
                                            <img src={bookkeeping} alt="bookkeeping" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;