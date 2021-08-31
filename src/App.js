import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import About from './components/About';
import Contact from './components/contact';
import Footer from './components/Footer';
function App() {

    return (
        <div className="app">
            <AppHeader />
            {/* <TattooItem /> */}
            <img class="w3-image" src="/img/architect.jpg" alt="Architecture" width="1500" height="800"></img>
            <div class="w3-display-middle w3-margin-top w3-center">
                <h1 class="w3-xxlarge w3-text-white">
                    <span class="w3-padding w3-black w3-opacity-min"><b>BR</b></span> 
                    <span class="w3-hide-small w3-text-light-grey">Architects</span></h1>
            </div>
            <div class="w3-container w3-padding-32" id="projects">
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
            </div>
            <Contact />
            <About />
            <center>
            <img class="w3-image" src="/img/map.jpg" alt="Architecture" width="85%" height="800"></img>
            </center>
            <br />
            
            <Footer />
            

        </div>
    );
}

export default App;
