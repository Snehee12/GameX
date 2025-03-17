import React from 'react';
import './Post.css';

export const Post = ({ name, text, description, image }) => {
  return (
    <div className="post">
      <h4>{name}</h4>
      <p className='des'>{description}</p>
      <p>{text}</p>
      {image && <img src={image} alt="Post" className="post-image" />}
    </div>
  );
};
