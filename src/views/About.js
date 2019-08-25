import React from 'react';
import { Store } from '../store/Store';
const aboutData = Store.about;

const About = () => {
  return (
    <div className='fullcenter'>
      <h1 className='heavy'>{aboutData.title}</h1>
      {aboutData.paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};

export default About;
