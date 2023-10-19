import React from 'react';

const Footer = () => {
  return (

    <>
    
    <div className='row no-gutter m-0 footer-section'>

      <div className="col-12 col-md-6 col-lg-4 p-4 p-md-5 footer-header d-flex flex-column justify-content-center align-items-center">

          <h1>
            Location
          </h1>
          <p >
          203, Newyork, 10080, USA
          </p>

      </div>
      <div className="col-12 col-md-6 col-lg-4 p-0 p-md-5 footer-header d-flex flex-column justify-content-center align-items-center">
        <h1>
        Follow Me
        </h1>
        <div className='footer-icon-wrap'>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icons"
            src="https://i.imgur.com/Dr5B5zu.png"
            alt="Icon of the Github logo"
          />
        </a>
            <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
            <img
            className="footer-icons"
            src="https://imgpile.com/images/RVPzv8.png"
            alt="Icon of the Linkedin logo"
          />
          </a>
          <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer-icons"
            src="https://imgpile.com/images/RVPVwb.png"
            alt="Icon of the Instagram logo"
          />
        </a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 p-4 p-md-5 footer-header d-flex flex-column justify-content-center align-items-center">
        <h1>Contact Me</h1>
        <p className='m-0 p-0'>Email address: demo@gmail.com</p>
        <p>Phone number: +123 45678789</p>
      </div>


    </div>

    </>
  );
};

export default Footer;
