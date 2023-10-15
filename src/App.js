import { React, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from "./components/UI/Intro";
import Service from "./components/UI/Service";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
function App () {
    useEffect(() => {
        AOS.init();
    }, []);
    return(
        <>
            <Header/>
            <main>
                <Intro/>
                <Service/>
                <Portfolio/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}

export default App;