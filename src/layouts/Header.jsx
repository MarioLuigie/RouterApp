import { useRef, useState } from "react"
import PropTypes from 'prop-types'
import danceVideo01 from "../assets/videos/dance01.mp4"
import danceVideo02 from "../assets/videos/dance02.mp4"
import '../styles/layouts/Header.scss'

export default function Header ({
    title
}) {

    const loop = false
    const [videoIndex, setVideoIndex] = useState(1)
    const videoRef = useRef(null);
    const videos = [danceVideo01, danceVideo02]

    const handleChangeVideo = () => {
        if (videoRef.current) {
            setTimeout(() => {
                videoRef.current.play()
            }, 10)
            setVideoIndex(prevVideoIndex => (
                prevVideoIndex === videos.length - 1 
                    ? 0 
                    : prevVideoIndex + 1
            ))
        }
        console.log(videoIndex)
        console.log("video ended")
    }

    return (
        <header className='header'>
            <video 
                key={videoIndex}
                autoPlay 
                loop={loop}
                muted 
                className="header__video"
                ref={videoRef}
                onEnded={handleChangeVideo}
            >
                <source 
                    src={videos[videoIndex]} 
                    type="video/mp4"
                />
            </video>
            <h2 className="header__title">{title}</h2>
        </header>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}





