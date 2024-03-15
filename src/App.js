import React from 'react';
import Event from './pages/events';
import backgroundImage from "../src/assets/tedx_bg.jpg" // Import your background image
import Teams from './Components/Teams/Teams';
import About from './Components/About/About';

const App = () => {
  return (
    <div className='bg-black bg-cover bg-center min-h-screen -ml-1' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Event />
      <Teams/>
      <About />
    </div>
  );
};

export default App;
