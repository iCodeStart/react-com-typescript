import React from 'react';
import './App.scss';
import { Header, Footer, Presentation, AboutMe, Tecnologies, Projects, TestimonialSlider, Contact } from './components'

function App() {
  return (
    <>
      <Header/>
      <Presentation/>
      <AboutMe/>
      <Tecnologies/>
      <Projects/>
      <TestimonialSlider/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
