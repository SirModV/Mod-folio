import React from 'react';
import Navigation from '../Navigation';

const Header = ({ setActivePage, activePage, activeNav, setActiveNav }) => {
  return (
    <>
      <h1 onClick={() => setActivePage({ about: true })} id="header-logo">
        Mo Duke
      </h1>
      <Navigation
        setActivePage={setActivePage}
        activePage={activePage}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
    </>
  );
};

export default Header;
