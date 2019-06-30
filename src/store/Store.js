export const Store = {
  home: {
    title: "Daniel Rowe",
    subtitle: "front end developer",
    icons: [
      {
        link: "https://github.com/d-rowe",
        class: "fa-github-square"
      },
      {
        link: "https://www.linkedin.com/in/daniel-rowe-b109a6180/",
        class: "fa-linkedin"
      }
    ]
  },

  portfolio: [
    {
      title: "Arist Map",
      image: "https://i.imgur.com/pd6OsBH.jpg",
      description:
        "Explore band gigographies. Created with React, Redux, Node.js, Express, Bootstrap, and Mapbox Gl. Utilizes the Songkick API.",
      demo: "https://artistmap.herokuapp.com",
      github: "https://github.com/d-rowe/ArtistMap"
    },
    {
      title: "Polyrhythmic Metronome",
      image: "https://i.imgur.com/JBGGaA0.jpg",
      description:
        "Learn polyrhythms with this polyphonic metronome. Geometric visualization created with two.js and GSAPa. Created with React, Redux, Two.js, GSAP, and Bulma.",
      demo: "http://polyrhythm.netlify.com",
      github: "https://github.com/d-rowe/polyrhythm-metronome"
    }
  ]
};
