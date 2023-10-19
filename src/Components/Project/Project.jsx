import React from "react";

const Project = ({
  title,
  stack,
  image,
  image_alt,
  github_link,
  live_link,
  nameOfClass,
  description
}) => {
  return (

    <>
<div className="col-12 col-md-6 col-lg-4 col-xl-4 p-3">
  <div className="card p-3">
  <img className="card-img-top" src={image} alt={image_alt} />
  <div className="card-body ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text" >{description}</p>
  </div>
  <div className="card-body">
    <a href={live_link} className="card-link">Live link</a>
    <a href={github_link} className="card-link">Github link</a>
  </div>
  </div>

</div>

    </>

  );
};

export default Project;
