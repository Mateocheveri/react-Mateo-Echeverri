import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section id='home' title='Home'>
          <p>Bienvenido a nuestra pagina de inicio.</p>
        </Section>
        <Section id='about' title='About'>
          <p>Infotmacion sobre nosotros.</p>
        </Section>
        <Section id='services' title='Services'>
          <p>Detalles de nuestros servicios.</p>
        </Section>
        <Section id='contact' title='Contact'>
          <p>Informacion de contacto.</p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;