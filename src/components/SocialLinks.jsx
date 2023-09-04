import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "../styles/components/SocialLinks.scss"

export default function SocialLinks () {

    return (
        <div className="socialLinks">
            <div className='socialLinks__link'>
                <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className='socialLinks__link'>
                <FontAwesomeIcon icon={faInstagram} />      
            </div>
            <div className='socialLinks__link'>
                <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className='socialLinks__link'>
                <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
        </div>
    )
}