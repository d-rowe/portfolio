import React from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Store } from '../store/Store';
const homeData = Store.home;

const Home = () => {
  return (
    <div className='fullcenter'>
      <h1 className='heavy'>{homeData.title}</h1>
      <h3 className='light'>{homeData.subtitle}</h3>
      <div>
        {homeData.icons
          ? homeData.icons.map((icon, index) => (
              <a href={icon.link} key={index}>
                <span className={`fab ${icon.class} socLink`} />
              </a>
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
