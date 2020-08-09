import React, { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Component from '../Component/Component';

// Styles
import DropdownStyles from '@fabula/core/styles/components/dropdown/dropdown';

const Dropdown = props => {
    const { alignment, children, direction, expand, onClose, onOpen, onToggle } = props;
    const [open, setOpen] = useState(props.open);
    const elRef = useRef(null);

    // Methods
    const toggle = () => {
        if (onClose && open) { onClose() }
        if (onOpen && !open) { onOpen() }
        if (onToggle) { onToggle(!open) }

        setOpen(!open);
    }

    // Callbacks
    const handleClick = useCallback(e => {
        if (elRef.current && !elRef.current.contains(e.target) && open) {
            toggle();
        }
    }, [toggle, elRef]);

    // Hooks
    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick]);

    // Children with props
    const childrenWithProps = Children.map(children, child => cloneElement(child, { alignment, direction, expand, open, toggle }));

    return (
        <Component
            elRef={elRef}
            properties={props}
            styles={DropdownStyles}
            wrapper="fab-dropdown-wrapper">
            <div ref={elRef}>
                <div className="fab-dropdown" data-open={open}>{childrenWithProps}</div>
            </div>
        </Component>
    )
}

Dropdown.defaultProps = {
    alignment: 'left',
    direction: 'down',
    expand: false,
    open: false,
}

Dropdown.propTypes = {
    alignment: PropTypes.string,
    direction: PropTypes.string,
    expand: PropTypes.bool,
    open: PropTypes.bool,
}

export default Dropdown;