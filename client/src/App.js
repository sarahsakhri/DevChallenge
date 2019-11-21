import React from 'react';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import Main from "./pages/main";
import { Container } from 'reactstrap';


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        {/* main will go here */}
        <h1>SAKHRI</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
