import './style.css'
import Projects from './components/Projects'
import GlowCard from './components/GlowCard'

export default function Home() {
  return (
    <div>  
      <GlowCard
        cardHeight="50svh"
        cardWith="75%"
        name="Jarne Wieme"
        title="Software Engineer"
        aboutText=" Hello! My name is Jarne Wieme, I graduated in DAE game development in June 2024 at Howest University in Kortrijk.
                  During my time at Howest I learned to work with commonly used tools that are being used by game developments companies today. This includes C++, C#, Unity, Unreal Engine 4 and 5... There were also two group projects where we learned to work with source control and communicate with each other. We learned different categories of programming for a game studio like graphics programming, gameplay programming, game engine programming and AI programming."
        avatarUrl="./images/Me.png"
        showUserInfo={false}
        enableTilt={false}
        enableMobileTilt={false}
        cardPadding="1% 0% 1% 0%"

        children={
          <div className="pc-content">
            <div className="pc-avatar-content">
              <div>
                <img
                  className="avatar"
                  src="./images/Me.png"
                  alt={`${"Jarne Wieme" || 'User'} avatar`}
                  loading="lazy"
                  onError={e => {
                    const t = e.target;
                    t.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="pc-about">
              <h1>Jarne Wieme</h1>
              <h2>Software Engineer</h2>
              <p>" Hello! My name is Jarne Wieme, I graduated in DAE game development in June 2024 at Howest University in Kortrijk.
                During my time at Howest I learned to work with commonly used tools that are being used by game developments companies today. This includes C++, C#, Unity, Unreal Engine 4 and 5... There were also two group projects where we learned to work with source control and communicate with each other. We learned different categories of programming for a game studio like graphics programming, gameplay programming, game engine programming and AI programming."</p>
            </div>
          </div>
        }
      />

      {/* Projects Section */}
      <Projects />

      {/* More Info */}
      <section>
        {/* Skills */}
        <GlowCard
          cardPadding="1% 0% 1% 0%"
          cardHeight="35svh"
          cardWith='75%'
          children={
            <div className="skills-content">
              <h1><strong>Skills</strong></h1>
              <div className="skillsGrid">
                <div className="skillItem">
                  <img src="./images/logos/cppLogo.png"/>
                  <span>C++</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/csLogo.png"/>
                  <span>C#</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/gitLogo.png"/>
                  <span>Git</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/perforceLogo.png" />
                  <span>Perforce</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/unityLogo.png"/>
                  <span>Unity</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/unrealLogo.png"/>
                  <span>Unreal engine</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/luaLogo.png"/>
                  <span>Lua</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/robloxStudioLogo.png"/>
                  <span>Roblox studio</span>
                </div>
              </div>
            </div>}
        />
      </section>

      <GlowCard
          cardPadding="1% 0% 1% 0%"
          cardHeight="30svh"
          cardWith='75%'
          children={
            <div className='myProfile'>
              <h1><strong>Contact Me</strong></h1>
              <p>+32 496/81.49.52</p><br/>
              <p>jarne.wieme@telenet.be</p><br />
              <a href="https://www.linkedin.com/in/jarnewieme/" target="_blank">linkedin.com/in/jarnewieme </a>
            </div>
          }
        />

      {/* Footer */}
      <footer style={{zIndex: '999'}}>
        <strong>&copy; Jarne Wieme 2024-2026</strong>
      </footer>
    </div>
  )
}
