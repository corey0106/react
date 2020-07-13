import React from 'react';

// Components
import Content from '../Content/Content';

const SegmentContent = props => {
    const { children } = props;

    return (
        <Content contentClassName="fab-segment-content" {...props}>
            {children}
        </Content>
    )
}

export default SegmentContent;