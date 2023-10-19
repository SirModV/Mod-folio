import React from "react";

const About = () => {
  return (
    <div className="mt-5">
      <h1 id="main-section-header">About me</h1>
      <hr id="main-section-hr" />
      <div className="row d-flex justify-content-center">

        <div className="col-8"> 
          <h1>Hi, I'm Mo Duke!</h1>
          <p>
            I am Full stack developer . Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius sunt repellat rem earum doloremque, corrupti amet dolorum nobis exercitationem maxime numquam deserunt obcaecati tenetur!
            <br />
            <br />
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad explicabo rerum eaque?
            <br />
            <br />
            HTML, CSS, Reactjs Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, facere reiciendis. Amet, nobis adipisci eligendi ipsam esse ullam error itaque perspiciatis autem!
            
            <br />
            <br />
            Expert in MERN stack
          </p>
        </div>
        <div className="col-4 d-flex justify-content-center">
        <img
         
         className="img-fluid"
         
          src={
            process.env.PUBLIC_URL + "/images/profile.jpeg"
        }
          alt="Portrait of me (M.D)"
        />
        </div>

      </div>
    </div>
  );
};

export default About;
