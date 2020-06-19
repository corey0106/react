import React, { useContext, useRef, useState } from 'react';
import { useEffect } from 'react';

// Controllers
import TooltipController from '../../controllers/TooltipController';

const TooltipWrapper = props => {
    const { children } = props;
    const { setActiveTooltip } = useContext(TooltipController);
    const [target, setTarget] = useState(null);
    const ref = useRef();

    useEffect(() => {
        console.log('target', target);
    }, [target]);

    useEffect(() => {
        if (ref.current) {
            getTarget();
        }
    }, [ref]);

    const getTarget = () => {
        const child = ref.current.children[0];
        const isWrapper = child.hasAttribute('data-fab-wrapper');
        const element = isWrapper ? child.children[0] : child;

        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', () => { setActiveTooltip(null); });
    }

    const handleMouseOver = e => {
        setActiveTooltip({
            height: e.target.offsetHeight,
            x: e.target.offsetLeft,
            width: e.target.offsetWidth,
            y: e.target.offsetTop
        });
    }

    return (
        <div className="fab-tooltip-wrapper" ref={ref}>
            {children}
        </div>
    )
}

export default TooltipWrapper;