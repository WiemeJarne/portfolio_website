import GlowCard from './GlowCard'
import './Skills.css'

export default function Skills() {
  const skills = [
    { src: "./images/logos/cppLogo.png", name: "C++" },
    { src: "./images/logos/csLogo.png", name: "C#" },
    { src: "./images/logos/gitLogo.png", name: "Git" },
    { src: "./images/logos/perforceLogo.png", name: "Perforce" },
    { src: "./images/logos/unityLogo.png", name: "Unity" },
    { src: "./images/logos/unrealLogo.png", name: "Unreal Engine" },
    { src: "./images/logos/luaLogo.png", name: "Lua" },
    { src: "./images/logos/robloxStudioLogo.png", name: "Roblox Studio" }
  ]

  return (
    <GlowCard
      cardPadding="1% 0% 1% 0%"
      cardHeight="auto"
      cardWith="100%"
    >
      <div className="skills-content">
        <h1><strong>Skills</strong></h1>

        <div className="skillsGrid">
          {skills.map(skill => (
            <div key={skill.name} className="skillItem">
              <img src={skill.src} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </GlowCard>
  )
}