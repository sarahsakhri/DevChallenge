import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from './components/footer';
import Main from "./pages/main";

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
