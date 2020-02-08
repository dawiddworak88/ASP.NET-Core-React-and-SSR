import React from 'react';
import logo from './logo.svg';

function HomePage(props) {
  return (
    <div className="home-page">
      <header className="home-page-header">
        <img src={logo} className="home-page-logo" alt="logo" />
        <p>
          {props.welcome}
        </p>
        <p>
          {props.learnMore}
        </p>
      </header>
    </div>
  );
}

export default HomePage;
