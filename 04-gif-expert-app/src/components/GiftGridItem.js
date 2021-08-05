import React from "react";
import PropTypes from 'prop-types';

export const GiftGridItem = ({title, url}) => {
    return (
        <div className="animate__animated animate__bounce animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
}

GiftGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}