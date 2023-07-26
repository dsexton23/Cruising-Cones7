import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
	return (
		<div>
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
		  <Route path="/menu" element={<Menu />} />
		  <Route path="/events" element={<Events />} />
		  <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </Router>
			

      {/* <div className="contact">
          <ContactUs />
      </div> */}


		</div>
	)
}

export default App;
