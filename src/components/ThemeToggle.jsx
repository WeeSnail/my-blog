import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToggleMode = ({className}) => {
    return (
        <Toggle
            className={`light-dark-toggle ${className}`}
            icons={{
                checked: <FontAwesomeIcon inverse icon="sun" />,
                unchecked: <FontAwesomeIcon inverse icon="moon" />
            }}
        />
    )
};

export default ToggleMode;
