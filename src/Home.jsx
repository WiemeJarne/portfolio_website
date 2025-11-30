import './style.css'
import Projects from './components/Projects'
import GlowCard from './components/GlowCard'

export default function Home() {
  return (
    <div>  
      <GlowCard
        cardHeight="58svh"
        name="Jarne Wieme"
        title="Software Engineer"
        aboutText=" Hello! My name is Jarne Wieme, I graduated in DAE game development in June 2024 at Howest University in Kortrijk.
                  During my time at Howest I learned to work with commonly used tools that are being used by game developments companies today. This includes C++, C#, Unity, Unreal Engine 4 and 5... There were also two group projects where we learned to work with source control and communicate with each other. We learned different categories of programming for a game studio like graphics programming, gameplay programming, game engine programming and AI programming."
        avatarUrl="./images/Me.png"
        showUserInfo={false}
        enableTilt={false}
        enableMobileTilt={false}
        cardPadding="1% 5% 1% 5%"

        children={
          <div className="pc-content">
            <div className="pc-avatar-content">
              <div className="pc-details">
                <h3>Jarne Wieme</h3>
                <p>Software Engineer</p>
              </div>
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
              <h3>About Me</h3>
              <p>" Hello! My name is Jarne Wieme, I graduated in DAE game development in June 2024 at Howest University in Kortrijk.
                During my time at Howest I learned to work with commonly used tools that are being used by game developments companies today. This includes C++, C#, Unity, Unreal Engine 4 and 5... There were also two group projects where we learned to work with source control and communicate with each other. We learned different categories of programming for a game studio like graphics programming, gameplay programming, game engine programming and AI programming."</p>
            </div>
          </div>
        }
      />

      {/* More Info */}
      <section className="sectionStyle">
        {/* Skills */}
        <GlowCard
          cardPadding="1% 1% 1% 5%"
          cardHeight="55svh"
          children={
            <div className="skills-content">
              <h3><strong>Skills</strong></h3>
              <div className="skillsGrid">
                <div className="skillItem">
                  <img src="./images/logos/cppLogo.png" className="logoImage" />
                  <span>C++</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/csLogo.png" className="logoImage" />
                  <span>C#</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/gitLogo.png" className="logoImage" />
                  <span>Git</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/perforceLogo.png" className="logoImage" />
                  <span>Perforce</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/unityLogo.png" className="logoImage" />
                  <span>Unity</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/unrealLogo.png" className="logoImage" />
                  <span>Unreal engine</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/luaLogo.png" className="logoImage" />
                  <span>Lua</span>
                </div>
                <div className="skillItem">
                  <img src="./images/logos/robloxStudioLogo.png" className="logoImage" />
                  <span>Roblox studio</span>
                </div>
              </div>
            </div>}
        />

        <GlowCard
          cardPadding="1% 5% 1% 1%"
          cardHeight="55svh"
          children={
            <div className='myProfile'>
              <h3><strong>My Profile</strong></h3>
              <span>Jarne Wieme</span><br />
              <span>Ghent, Belgium</span><br />
              <span>Digital Arts and Entertainment - Game Development (graduated June 2024)</span><br />
              <h3><strong>Contact Me</strong></h3>
              <span>+32 496/81.49.52</span><br />
              <span>jarne.wieme@telenet.be</span><br />
              <a href="https://www.linkedin.com/in/jarnewieme/" target="_blank">linkedin.com/in/jarnewieme </a>
            </div>
          }
        />
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Footer */}
      <footer style={{zIndex: '999'}}>
        <strong>&copy; Jarne Wieme 2024-2026</strong>
      </footer>
    </div>
  )
}
