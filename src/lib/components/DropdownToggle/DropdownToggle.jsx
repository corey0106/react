import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import Component from '../Component/Component';
import InnerIcon from '../InnerIcon/InnerIcon';

// Styles
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';

const DropdownToggle = (props) => {
	const { children, className, direction, icon, label, onClick, open, toggle, ...rest } = props;
	const elRef = useRef(null);

	const handleClick = () => {
		if (onClick) { onClick(); }
		toggle();
	};

	return (
		<Component elRef={elRef} properties={props} styles={DropdownToggleStyles} wrapper="fab-dropdown-toggle">
			<div data-direction={direction} data-open={open} ref={elRef}>
				<Button onClick={handleClick} {...rest}>
					{!!icon && typeof icon === 'object' && <InnerIcon icon={icon} parentProps={props} />}
					{!!icon && typeof icon === 'string' && <InnerIcon icon={{ name: icon }} parentProps={props} />}
					<span className="fab-dropdown-toggle__label">{label || children}</span>
					<span className="fab-dropdown-toggle__chevron" />
				</Button>
			</div>
		</Component>
	);
};

DropdownToggle.defaultProps = {
	direction: '',
	icon: '',
	label: '',
	open: false
};

DropdownToggle.propTypes = {
	direction: PropTypes.string,
	icon: PropTypes.string,
	label: PropTypes.string,
	open: PropTypes.bool
};

export default DropdownToggle;
