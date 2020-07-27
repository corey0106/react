import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';
import InnerIcon from '../InnerIcon/InnerIcon';

// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';

const Button = props => {
    const {
        border,
        children,
        circle,
        className,
        color,
        disabled,
        expand,
        icon,
        label,
        outline,
        rounded,
        ...rest
    } = props;
    const elRef = useRef(null);

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={ButtonStyles}
            wrapper="fab-button-wrapper">
            <div
                data-fab-wrapper="button"
                data-border={border}
                data-circle={!!circle || !!icon}
                data-color={color}
                data-expand={expand}
                data-outline={outline}
                data-rounded={rounded}
                ref={elRef}>
                <button
                    className="fab-button"
                    data-fab-component="button"
                    disabled={disabled}
                    {...rest}>
                    {!!icon && <InnerIcon icon={icon} parentProps={props} />}
                    {!!label && <span>{label}</span>}
                    {children}
                </button>
            </div>
        </Component>
    )
};

Button.defaultProps = {
    align: 'center',
    color: null,
    compact: false,
    expand: false,
    faded: false,
    glow: false,
    gradient: false,
    invert: false,
    outline: false,
    rounded: false,
    size: 'md',
    wide: false,
}

Button.propTypes = {
    align: PropTypes.string,
    clear: PropTypes.bool,
    color: PropTypes.string,
    compact: PropTypes.bool,
    expand: PropTypes.bool,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    gradient: PropTypes.bool,
    icon: PropTypes.any,
    invert: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.string,
    wide: PropTypes.bool
}

export default Button;