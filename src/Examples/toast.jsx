import React, { useEffect, useContext } from 'react';

import { Button, ButtonGroup, Toast, ToastService } from '@fabula/react-dev';
import Example from '../components/Example/Example';

const ToastExample = props => {
    const toastService = useContext(ToastService);

    const addToast = stack => {
        toastService.showToast({
            color: 'primary',
            closeButton: {
                color: 'primary',
                invert: true,
                label: 'Go there'
            },
            hideDelay: 4000,
            message: 'Here is an example of a toast component working...',
            stack
        });
    }

    const handleStack = name => {
        const placements = {
            bottomCenter: {
                x: 'center',
                y: 'bottom'
            },
            bottomLeft: {
                x: 'left',
                y: 'bottom'
            },
            bottomRight: {
                x: 'right',
                y: 'bottom'
            },
            topCenter: {
                x: 'center',
                y: 'top'
            },
            topLeft: {
                x: 'left',
                y: 'top'
            },
            topRight: {
                x: 'right',
                y: 'top'
            },
        };

        console.log(placements[name]);

        toastService.createStack({
            name,
            placement: placements[name]
        });
    }

    return (
        <Example title="Toast">
            <h2>Example</h2>
            <Toast closeButton={{ color: 'danger', label: 'Go there' }} hide={false} message="Here is an example of a toast component working..." />
            <h2>Toast placement</h2>
            <ButtonGroup>
                <Button color="primary" onClick={() => handleStack('topCenter')}>Create Top-Center Stack</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('topCenter')}>Add Toast</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="primary" onClick={() => handleStack('topLeft')}>Create Top-Left Stack</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('topLeft')}>Add Toast</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="primary" onClick={() => handleStack('topRight')}>Create Top-Right Stack</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('topRight')}>Add Toast</Button>
            </ButtonGroup>

            <ButtonGroup>
                <Button color="primary" onClick={() => handleStack('bottomCenter')}>Create Bottom-Center Stack</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('bottomCenter')}>Add Toast</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="primary" onClick={() => handleStack('bottomLeft')}>Create Bottom-Left Stack</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('bottomLeft')}>Add Toast</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="primary" onClick={() => handleStack('bottomRight')}>Create Bottom-Right Stack</Button>
                <Button border={true} clear={true} color="primary" onClick={() => addToast('bottomRight')}>Add Toast</Button>
            </ButtonGroup>
        </Example>
    )
}

export default ToastExample;