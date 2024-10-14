import React from "react";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Portfolio from"./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import Navbar from "./sections/navbar/Navbar"
import Footer from "./sections/footer/Footer"
import Header from "./sections/header/Header"
import Contact from "./sections/contact/Contact"
import { DarkMode } from "@mui/icons-material";



const App= () => {
    return(
        <main>
            <Navbar/>
            <Header/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>

        </main>
    )
}

export default App