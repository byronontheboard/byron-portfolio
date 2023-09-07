import React from 'react';

function Project({ title, description, image }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
}

export default Project;
