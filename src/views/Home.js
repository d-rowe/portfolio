import React from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Store } from '../store/Store';
const homeData = Store.home;

const Home = () => {
  // const techIcon = icon => {
  //   return <span className="iconify" data-icon={icon} data-inline="false" />;
  // };

  return (
    <div className='fullcenter'>
      <h1 className='heavy'>{homeData.title}</h1>
      <h3 className='light'>{homeData.subtitle}</h3>
      <div>
        {homeData.icons
          ? homeData.icons.map(icon => (
              <a href={icon.link} key={icon.key}>
                <span className={`fab ${icon.class} socLink`} />
              </a>
            ))
          : null}
      </div>
      {/* <div className="technologies">
        {techIcon("fa-brands:react")}
        {techIcon("simple-icons:redux")}
        {techIcon("fa-brands:node-js")}
        {techIcon("fa-brands:git-square")}
        {techIcon("fa-brands:bootstrap")}
        {techIcon("typcn:html5")}
        {techIcon("el:css")}
        {techIcon("fa-brands:sass")}
      </div> */}
    </div>
  );
};

export default Home;
