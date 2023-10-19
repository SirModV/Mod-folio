import React, { useState } from 'react';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio/Protfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';

function App() {
  const [activePage, setActivePage] = useState({
    about: true,
    portfolio: false,
    contact: false,
    resume: false,
  });

  const [activeNav, setActiveNav] = useState(false);

  return (
    <main
      onClick={(e) => {
        if (
          e.target.className === '' ||
          !e.target.className === 'nav-stack active' ||
          !e.target.className === 'nav-stack' ||
          !e.target.className === 'mobile-nav active' ||
          e.target.className === 'subject' ||
          e.target.className === 'name' ||
          e.target.className === 'email'
        ) {
          return setActiveNav(false);
        }
        if (e.target.className === 'mobile-nav active') {
          return setActiveNav(true);
        }
      }}
    >
      <nav>
        <Header
          activePage={activePage}
          setActivePage={setActivePage}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
      </nav>
      <section className='main-section container mt-5'>
        {activePage.about ? (
          <About />
        ) : activePage.portfolio ? (
          <Portfolio />
        ) : activePage.contact ? (
          <Contact />
        ) : activePage.resume ? (
          <Resume />
        ) : (
          ''
        )}
      </section>
      <Footer />
    </main>
  );
}

export default App;
