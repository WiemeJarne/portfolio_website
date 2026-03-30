import { useEffect, useRef } from "react"
import "../style.css"
import "./Projects.css"
import projectsData from "../data/projects.json"
import GlowCard from './GlowCard'

export default function Projects() {
  const videoRefs = useRef({}); // store refs for all videos

  useEffect(() => {
    const intervals = [];

    projectsData.projects.forEach(project => {
      if (project.images?.length > 1) {
        let index = 0;
        const imgEl = document.getElementById(`${project.folderName}Image`);
        if (!imgEl) return;

        const interval = setInterval(() => {
          index = (index + 1) % project.images.length;
          imgEl.src = `./${project.images[index]}`;
        }, 2000);

        intervals.push(interval);
      }
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="projectsSection">
      <GlowCard
        cardHeight="auto"
        cardWith="100%"
        cardPadding="0% 0% 1% 0%"
        children={
          <div className="TitleBanner">
            <h1>Projects</h1>
          </div>
        }
      />

      <div className="projectsGrid">
        {projectsData.projects.map((project, index) => {
          return (
            <GlowCard
              key={`grid1-${project.folderName}`}
              cardWith="100%"
              cardHeight="auto"
              children={
                <div className={`projectContainer`}>

                  <h2><strong>{project.title}</strong></h2>

                  <div className="playVideoOnImageHover">
                    <video
                      ref={el => videoRefs.current[project.folderName] = el}
                      className="hover-video"
                      muted
                      loop
                      preload="metadata"
                      playsInline
                    >
                      <source src={project.videoSrc} type="video/mp4" />
                    </video>

                    <img
                      id={`${project.folderName}Image`}
                      alt={`${project.title} image`}
                      className="projectVisials"
                      src={`./${project.images[0]}`}
                      onMouseEnter={() => {
                        const video = videoRefs.current[project.folderName];
                        if (video) video.play().catch(() => { });
                      }}
                      onMouseLeave={() => {
                        const video = videoRefs.current[project.folderName];
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    />
                  </div>

                  <div className="projectInfo">

                    <div className="boxContainerItemsHorizontal">
                      {project.technologies.map(tech => (
                        <img key={tech.src} src={tech.src} alt={tech.alt} className="smallLogoImage" />
                      ))}
                    </div>

                    <p>{project.description}</p>
                    {project.codeLink && (
                      <a href={project.codeLink} target="_blank" className="projectCodeLink">View Code</a>
                    )}
                  </div>
                </div>
              } />
          );
        })}
      </div>

    </section>
  );
}
