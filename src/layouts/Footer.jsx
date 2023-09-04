import PropTypes from "prop-types"
import "../styles/layouts/Footer.scss"

export default function Footer ({
    sign,
    link
}) {

    return (
        <footer className="footer">
            <div className="footer__sign">
                <p>{sign}</p>
                <p>
                    <a 
                    className="footer__link"
                    href="https://mixkit.co/" 
                    target="blank"
                    >
                        {link}
                    </a>
                </p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    sign : PropTypes.string.isRequired,
    link : PropTypes.string.isRequired,
}