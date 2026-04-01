import { useEffect, useRef } from "react"
import ProjectCard from './ProjectCard'
import projectsData from "../../data/projects.json"
import GlowCard from '../GlowCard'

import './Projects.css'

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
            <ProjectCard project={project} videoRef={el => videoRefs.current[project.folderName] = el}/>
          );
        })}
      </div>

    </section>
  );
}
