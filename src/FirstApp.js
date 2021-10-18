import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ hello, subtitle }) => {

    return (
        <>
            <h1> { hello } </h1>
            <p>{ subtitle }</p>
        </>
    );
}

FirstApp.propTypes = {
    hello: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'my first app react'
}

export default FirstApp;