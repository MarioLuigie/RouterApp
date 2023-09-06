import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "../styles/components/SocialLinks.scss"

export default function SocialLinks () {

    return (
        <div className="socialLinks">
            <div className='socialLinks__link'>
                <a href="https://www.facebook.com/" target="blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            </div>
            <div className='socialLinks__link'>
                <a href="https://www.instagram.com/" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>  
            </div>
            <div className='socialLinks__link'>
                <a href="https://www.youtube.com/" target="blank"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
            <div className='socialLinks__link'>
                <a href="https://www.linkedin.com/" target="blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </div>
    )
}