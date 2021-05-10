import PropTypes from 'prop-types'
import Button from '../Button/Button'

const Header = ({ title, onAdd }) => {

    return (
        <header>
            <h1>{title} </h1>
            <Button onClick={onAdd}  />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header




