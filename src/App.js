import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "./styles.css";
const App =()=>{
    return(
        <div>
            {/* <h1>Hello</h1> */}
            <Navbar/>
            <Header/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
            <Copyright/>
        </div>
    )
}
export default App;