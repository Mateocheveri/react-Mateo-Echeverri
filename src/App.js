import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
  const testimonials = [
    {
      name: 'Juan Rodrigo',
      title: 'Desarrollador Frontend',
      image: 'https://img.freepik.com/fotos-premium/sentirse-feliz-positivo-exitoso-celebrando-logros-victoria-o-buena-suerte_1194-559026.jpg',
      text: '¡Este producto cambió mi vida! Lo recomiendo al 100%.'
    },
    {
      name: 'Ana Gómez',
      title: 'Gerente de Proyecto',
      image: 'https://images.pexels.com/photos/3765146/pexels-photo-3765146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      text: 'Excelente atención al cliente y resultados sorprendentes.'
    },
    {
      name: 'Carlos Martínez',
      title: 'Diseñador Gráfico',
      image: 'https://media.istockphoto.com/id/1069903754/es/foto/feliz-mujer-tiro-selfie-en-su-tel%C3%A9fono-m%C3%B3vil.jpg?s=612x612&w=0&k=20&c=2pbpg8mcEO1yb4rSaakKbuKJLurICM9FbG6sbI0xyPo=',
      text: 'Una herramienta increíble. Ayuda mucho en mi trabajo diario.'
    }
  ];
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

      <h1>Testimonios</h1>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
            text={testimonial.text}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;