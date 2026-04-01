import ProfileCard from './components/ProfileCard'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

import './style.css'

export default function Home() {
  return (
    <div className='parentContainer'>
      <ProfileCard/>

      <Projects />

      <Skills />

      <Contact />

      {/* Footer */}
      <footer style={{ zIndex: '999' }}>
        <strong>&copy; Jarne Wieme 2024-2026</strong>
      </footer>
    </div>
  )
}
