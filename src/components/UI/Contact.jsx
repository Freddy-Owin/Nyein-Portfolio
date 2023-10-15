import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faEnvelopeSquare, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Contact () {
    return (
        <section id="contact" className="pb-16">
            <div className="container">
                <h1 className="font-[700] text-[2.5rem]">Get in Touch</h1>
                <div className="items-center justify-between md:flex ">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        {/* <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d238.563868096996!2d96.09462684389787!3d16.92424353673972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1681794454968!5m2!1sen!2smm" className="w-full h-full border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.37432380732264!2d96.09766799088825!3d16.92212936526851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19670cd09e98f%3A0xca0463c1e6b7a363!2sAung%20San%20Zay!5e0!3m2!1sen!2smm!4v1681879554764!5m2!1sen!2smm" className="w-full h-full border-0"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg-flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                        <div className="w-full mb-5 text-[20px] text-violet-800">
                            <FontAwesomeIcon icon={faAddressCard}/> Address
                            <p className="text-[15px] text-black">Thitsar Wadi Street, Aung San Quartar, Insein Township, Yangon, Myanmar</p>
                        </div>
                        <div className="w-full mb-5 text-[20px] text-violet-800">
                            <FontAwesomeIcon icon={faPhoneSquare}/> Phone
                            <p className="text-[15px] text-black">+959261977433, +959755429917</p>
                        </div>
                        <div className="w-full mb-5 text-[20px] text-violet-800">
                            <FontAwesomeIcon icon={faEnvelopeSquare}/> Email
                            <p className="text-[15px] text-black">atn3800@gmail.com</p>
                        </div>
                        <div className="w-full mb-5 text-[20px] text-violet-800">
                            <FontAwesomeIcon icon={faWhatsapp}/> Whatsapp
                            <p className="text-[15px] text-black">+959755429917</p>
                        </div>
                        <div className="w-full mb-5 text-[20px] text-violet-800">
                            <FontAwesomeIcon icon={faTelegram}/> Telegram
                            <p className="text-[15px] text-black">+959261977433</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 
export default Contact;