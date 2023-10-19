import React from "react";
import Project from "../Project/Project";

const Portfolio = () => {
  const project = [
    {
      
      title: "Project title",
      stack: "MERN stack",
      image_url: "https://via.placeholder.com/400x300",
      image_alt: "portfolio image",
      github_link: "https://github.com",
      deployed_link: "vercel.app/",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vero repudiandae molestiae, rerum nulla debitis, fuga quaerat nobis est temporibus excepturi eveniet."
    },
    {
      
      title: "Project title",
      stack: "MERN stack",
      image_url: "https://via.placeholder.com/400x300",
      image_alt: "portfolio image",
      github_link: "https://github.com",
      deployed_link: "vercel.app/",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vero repudiandae molestiae, rerum nulla debitis, fuga quaerat nobis est temporibus excepturi eveniet."
    },
    {
      
      title: "Project title",
      stack: "MERN stack",
      image_url: "https://via.placeholder.com/400x300",
      image_alt: "portfolio image",
      github_link: "https://github.com",
      deployed_link: "vercel.app/",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vero repudiandae molestiae, rerum nulla debitis, fuga quaerat nobis est temporibus excepturi eveniet."
    },  {
      
      title: "Project title",
      stack: "MERN stack",
      image_url: "https://via.placeholder.com/400x300",
      image_alt: "portfolio image",
      github_link: "https://github.com",
      deployed_link: "vercel.app/",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vero repudiandae molestiae, rerum nulla debitis, fuga quaerat nobis est temporibus excepturi eveniet."
    },  {
      
      title: "Project title",
      stack: "MERN stack",
      image_url: "https://via.placeholder.com/400x300",
      image_alt: "portfolio image",
      github_link: "https://github.com",
      deployed_link: "vercel.app/",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vero repudiandae molestiae, rerum nulla debitis, fuga quaerat nobis est temporibus excepturi eveniet."
    },  {
      
      title: "Project title",
      stack: "MERN stack",
      image_url: "https://via.placeholder.com/400x300",
      image_alt: "portfolio image",
      github_link: "https://github.com",
      deployed_link: "vercel.app/",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, vero repudiandae molestiae, rerum nulla debitis, fuga quaerat nobis est temporibus excepturi eveniet."
    }
    
  ];

  return (
    <div id="portfolio">
      <h1 id="main-section-header" className="mt-5">My Portfolio</h1>
      <hr id="main-section-hr" />
      
      <div id="portfolio-wrapper" className="row  mb-5">
        {project.map((item, id) => {
          return (
            <Project
              key={id}
              title={item.title}
              stack={item.stack}
              image={item.image_url}
              image_alt={item.image_alt}
              github_link={item.github_link}
              live_link={item.deployed_link}
              nameOfClass={item.nameOfClass}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
