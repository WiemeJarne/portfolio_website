import GlowCard from './GlowCard'
import './Contact.css'

export default function Contact() {
  return (
    <GlowCard
      cardPadding="1% 0% 1% 0%"
      cardHeight="auto"
      cardWith="100%"
    >
      <div className='myProfile'>
        <h1><strong>Contact Me</strong></h1>

        <p>+32 496/81.49.52</p>
        <p>jarne.wieme@telenet.be</p>

        <a
          href="https://www.linkedin.com/in/jarnewieme/"
          target="_blank"
        >
          linkedin.com/in/jarnewieme
        </a>
      </div>
    </GlowCard>
  )
}