import React from 'react';
import backgroundImage from "../src/assets/tedx_bg.jpg" // Import your background image
import Teams from './pages/Teams';
import About from './pages/About';
import { Route, Routes } from 'react-router';
import Events from './pages/events';
import Collaborate from './pages/Collaborate';
import { NavbarWithMegaMenu } from './Components/Events/Navbar';
import { FooterWithSocialLinks } from './Components/Events/Footer';

const App = () => {
  return (
    <div className='bg-black bg-cover bg-center min-h-screen -ml-1' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NavbarWithMegaMenu/>
      <Routes>
        <Route path='/events' element={<Events />}/>
        <Route path='/team' element={<Teams />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/collaborate' element={<Collaborate />}/>
      </Routes>
      <FooterWithSocialLinks/>
    </div>
  );
};

export default App;
