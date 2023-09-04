import PropTypes from "prop-types"
import "../styles/components/Button.scss"

export default function Button ({
    label
}) {

    return (
        <div className="buttonWrapper">
            <button
                className="button"
            >
                {label}
            </button>
        </div>
    )
}

Button.propTypes = {
    label : PropTypes.string.isRequired,
}