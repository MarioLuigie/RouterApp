import PropTypes from 'prop-types'
import '../styles/layouts/Header.scss'

export default function Header ({
    title
}) {

    return (
        <header className='header'>
            <h2>{title}</h2>
        </header>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}