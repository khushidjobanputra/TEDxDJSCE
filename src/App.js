import React from 'react';
import Event from './pages/events';
import backgroundImage from "../src/assets/tedx_bg.jpg" // Import your background image

const App = () => {
  return (
    <div className='bg-black bg-cover bg-center min-h-screen -ml-1' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Event />
    </div>
  );
};

export default App;
