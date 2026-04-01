import './HoverVideo.css'
import { useState } from 'react'

export default function HoverVideo({ project, videoRef }) {
    const [showVideo, setShowVideo] = useState(false)

    const handleClick = () => setShowVideo(prev => !prev)

    return (
        <div className="playVideoOnImageHover">
            {showVideo && (
                <video
                    ref={videoRef}
                    className="hover-video"
                    muted
                    autoPlay
                    playsInline
                    onEnded={() => setShowVideo(false)}
                >
                    <source src={project.videoSrc} type="video/mp4" />
                </video>
            )}

            <img
                id={`${project.folderName}Image`}
                src={`./${project.images[0]}`}
                alt={`${project.title} image`}
                className="projectVisials"
                onClick={handleClick}
            />

            <div className="videoIndicator" onClick={handleClick}>
                ▶
            </div>
        </div>
    )
}