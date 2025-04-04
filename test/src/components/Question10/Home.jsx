import React from 'react';
import bgImage from './image.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    width: '100%',
  };

  return (
    <div className="w-100 d-flex align-items-center justify-content-center text-center" style={backgroundStyle}>
      <div className="text-white">
        <h1>Welcome to the Portfolio</h1>
        <p>
          This is the React portfolio website.<br />
          Used for React to show front-end skills.<br />
          With the background image.<br /><br />
          <button className="btn btn-primary">Button 1</button>
          <button className="btn btn-primary ms-3">Button 2</button>
        </p>
      </div>
    </div>
  );
};

export default Home;
