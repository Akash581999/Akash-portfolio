// import React from "react";
import "../styles/work.scss";

const Work = () => {
  let projects = [
    {
      id: 1,
      title: "Movie Mania",
      technologies: ["React", "Redux", "SASS"],
      imageSource: "Screenshot_1",
      description:
        "Moviemania is a React-based movie website that allows users to search for movies by title, sort them by genre, view trending and upcoming movies.",
      url: "https://moviemania-movie-app.netlify.app",
    },

    {
      id: 2,
      title: "Todo App",
      technologies: ["React", "Express", "MongoDB", "SASS"],
      imageSource: "Screenshot_2",
      description:
        "An application specially built to keep track of errands or tasks that need to be done.",
      url: "https://task-managing-app.netlify.app",
    },
    {
      id: 3,
      title: "Gossip clan",
      technologies: ["React", "Chakra-UI", "Firebase"],
      imageSource: "Screenshot_3",
      description:
        "A chat application built with React and Chakra UI. The app features dynamic message rendering, automatic scrolling, and secure Firebase authentication, creating an immersive and user-friendly chat experience.",
      url: "https://gossip-clan.netlify.app",
    },
    {
      id: 4,
      title: "Rainy: Weather API",
      technologies: ["React"],
      imageSource: "Screenshot_4",
      description:
        "Weather API using react is Users friendly design to help user to access Weather of different place all over the world on the screen.",
      url: "https://rainy-weather-app.netlify.app",
    },
    {
      id: 5,
      title: "QR-Code Generator",
      technologies: ["HTML", "CSS", "Javascript"],
      imageSource: "Screenshot_5",
      description:
        "A QR code generator is an application that stores any required textual data into a QR code which can be later scanned with a QR code scanner to reveal the stored information.",
      url: "https://qr-code-generating-app.netlify.app",
    },
  ];
  return (
    <div id="work" className="container section">
      <h2 className="title">My Project Work...</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div
            className={`project__card ${index % 2 === 0 ? "fd" : "fdr"}`}
            key={project.id}
          >
            <div className="project__img">
              <img src={`./${project.imageSource}.png`} alt={project.title} />
            </div>
            <div className="project__info">
              <h3 className="title">{project.title}</h3>
              <div className="tech">
                {project.technologies.map((value, key) => (
                  <span className="tech__style" key={key}>
                    {value}
                  </span>
                ))}
              </div>
              <div className="description">
                <p className="desc">{project.description}</p>
              </div>
              <div className="visitButton">
                <a
                  className="btn"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
