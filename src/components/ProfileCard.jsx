import GlowCard from './GlowCard'
import './ProfileCard.css'

export default function ProfileCard() {
  return (
    <GlowCard
      cardHeight="auto"
      cardWith="100%"
      enableTilt={false}
      enableMobileTilt={false}
      cardPadding="1% 0% 1% 0%"
    >
      <div className="pc-content">
        <div className="pc-avatar-content">
          <img
            className="avatar"
            src="./images/Me.png"
            alt="Jarne Wieme avatar"
            loading="lazy"
            onError={e => {
              e.target.style.display = 'none'
            }}
          />
        </div>

        <div className="pc-about">
          <h1>Jarne Wieme</h1>
          <h2>Software Engineer</h2>

          <p>
            Hello! My name is Jarne Wieme, I graduated in DAE game development in June 2024 at Howest University in Kortrijk.
            During my time at Howest I learned to work with commonly used tools that are being used by game development companies today.
            This includes C++, C#, Unity, Unreal Engine 4 and 5...
          </p>
        </div>
      </div>
    </GlowCard>
  )
}