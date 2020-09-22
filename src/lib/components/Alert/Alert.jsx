import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import CloseButton from '../CloseButton/CloseButton';
import InnerIcon from '../InnerIcon/InnerIcon';

// Methods
import getTransitionDuration from '@fabula/core/styles/methods/misc/getTransitionDuration';

// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';
import Component from '../Component/Component';

const Alert = props => {
    const {
        children,
        closeButton,
        color,
        elRef,
        icon,
        onClose,
        text,
        visible,
        title,
        type
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef(null);

    // Hooks
    useEffect(() => {
        if (visible != null) { setIsVisible(visible); }
    }, [visible]);

    const closeAlert = () => {
        const transitionDuration = getTransitionDuration(ref.current);

        setIsClosing(true);
        setTimeout(() => {
            if (onClose) { onClose() }

            setIsClosing(false);
            setIsVisible(false);
        }, transitionDuration + 1);
    }

    if (isVisible) {
        return (
            <Component
                elRef={ref || elRef}
                properties={props}
                styles={AlertStyles}
                wrapper="fab-alert">
                <div
                    className="fab-alert"
                    data-closing={isClosing}
                    data-fab-component="alert"
                    data-title={!!title}
                    data-visible={isVisible}
                    ref={ref || elRef}>
                    {!!icon && !type && <InnerIcon icon={icon} parentProps={props} />}
                    {type === 'danger' && <InnerIcon icon={{ color: 'danger', name: 'alert-triangle' }} parentProps={props} />}
                    {type === 'info' && <InnerIcon icon={{ color: 'info', name: 'info' }} parentProps={props} />}
                    {type === 'success' && <InnerIcon icon={{ color: 'success', name: 'check' }} parentProps={props} />}
                    {type === 'warning' && <InnerIcon icon={{ color: 'warning', name: 'alert-circle' }} parentProps={props} />}
                    <div className="fab-alert__stage">
                        {!!title &&
                            <div className="fab-alert__title">{title}</div>
                        }
                        {!!text &&
                            <div className="fab-alert__text">{text}</div>
                        }
                        {children}
                    </div>

                    {!!closeButton && <CloseButton circle={true} onClick={closeAlert} parentColor={color} size="sm" />}
                </div>
            </Component>
        )
    } else {
        return <></>
    }
}

Alert.defaultProps = {
    border: true,
    borderColor: '',
    clear: false,
    closeButton: false,
    color: '',
    faded: false,
    glow: false,
    icon: null,
    invert: false,
    marker: '',
    outline: false,
    text: '',
    textColor: '',
    title: '',
    titleColor: '',
    type: '',
    visible: true
}

Alert.propTypes = {
    border: PropTypes.bool,
    borderColor: PropTypes.string,
    clear: PropTypes.bool,
    closeButton: PropTypes.bool,
    color: PropTypes.string,
    faded: PropTypes.bool,
    glow: PropTypes.bool,
    icon: PropTypes.any,
    invert: PropTypes.bool,
    marker: PropTypes.string,
    outline: PropTypes.bool,
    text: PropTypes.string,
    textColor: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    type: PropTypes.string,
    visible: PropTypes.bool
}

export default Alert;