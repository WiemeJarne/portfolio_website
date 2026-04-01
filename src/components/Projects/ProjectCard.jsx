import HoverVideo from './HoverVideo'
import GlowCard from '../GlowCard'
import './ProjectCard.css'

export default function ProjectCard({ project, videoRef }) {
  return (
    <GlowCard key={project.folderName} cardHeight="auto" cardWith="100%" className='projectCard'>
      <div className="projectContainer">
        <h2>{project.title}</h2>
        <HoverVideo project={project} videoRef={videoRef} />
        <div className="projectInfo">
          <div className="skillsUsedContainer">
            {project.technologies.map(tech => (
              <img key={tech.src} src={tech.src} alt={tech.alt} className="smallSkillLogoImage" />
            ))}
          </div>
          <p>{project.description}</p>
          {project.codeLink && <a href={project.codeLink} target="_blank">View Code</a>}
        </div>
      </div>
    </GlowCard>
  )
}