import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ContentSection from './components/ContentSection/ContentSection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Questions from './components/Questions';
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import './App.css';


const App = () => {
    const [] = useState([]);


    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ContentSection />} /> {/* Default route (e.g., home page) */}
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/questions" element={<Questions />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/productpage" element={<ProductPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
