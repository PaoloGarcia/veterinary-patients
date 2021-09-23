import PropTypes from "prop-types"
import React from "react"

function Header({ title = "" }) {
    return (
        <header>
            <h1 className="text-center">{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
