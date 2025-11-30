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
          imgEl.src = `/${project.images[index]}`;
        }, 2000);

        intervals.push(interval);
      }
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="projectsSection">
      <GlowCard
        cardHeight="20svh"
        cardPadding="1% 5% 1% 5%"
        children={
          <div className="projectsTitleBanner">
            <h3>Projects</h3>
          </div>
        }
      />

      <div className="projectsGrid">
        {projectsData.projects.map((project, index) => {
          const itemsPerRow = 3;
          const columnIndex = index % itemsPerRow; // 0 = first column, 1 = second, 2 = third

          let columnPadding;
          if (columnIndex === 0) columnPadding = "1% 0% 0% 5%";      // first row
          else if (columnIndex === 1) columnPadding = "1% 0% 0% 0%"; // second row
          else columnPadding = "1% 5% 0% 0%";                      // third row

          return (
            <GlowCard
              key={`grid1-${project.folderName}`}
              cardWith="32%"
              cardHeight="80svh"
              cardPadding={columnPadding}
              children={
                <div
                  className={`projectContainer ${project.styleType === 2 ? "style2" : ""}`}
                >
                  {project.styleType === 1 && <h3><strong>{project.title}</strong></h3>}

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
                  
                  <div className="boxContainerItemsHorizontal">
                    {project.technologies.map(tech => (
                      <img key={tech.src} src={tech.src} alt={tech.alt} className="smallLogoImage" />
                    ))}
                  </div>

                  {project.styleType === 2 && <h3><strong>{project.title}</strong></h3>}

                  <div className="boxContainerItemsVertical transparentBackground" style={project.styleType === 2 ? { margin: "2%" } : {}}>
                    <p>{project.description}</p>
                    <span>Last update: {project.lastUpdate}</span>
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
