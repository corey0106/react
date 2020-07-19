import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

// Styles
import CardImageStyles from '@fabula/core/styles/components/card-image/card-image';

const CardImage = props => {
    const { children, className, src, layout } = props;
    const classes = ['fab-card-image', css(CardImageStyles({ framework: 'react', props })), className || ''];
    
    return (
        <div className={classes.join(' ')} data-layout={layout}>
            {!!src && <img src={src} />}
            {children}
        </div>
    )
}

CardImage.defaultProps = {
    adaptColor: false,
    color: '',
    cover: false,
    height: null,
    icon: '',
    layout: '',
    src: '',
    width: null
}

CardImage.propTypes = {
    adaptColor: PropTypes.bool,
    color: PropTypes.string,
    cover: PropTypes.bool,
    height: PropTypes.any,
    icon: PropTypes.string,
    layout: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.any
}

export default CardImage;