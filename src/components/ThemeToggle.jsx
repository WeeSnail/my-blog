import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useTheme } from './ThemeProvider';

const ToggleMode = ({className}) => {
    const { switchTheme } = useTheme();
    return (
        <Toggle
            onChange={switchTheme}
            className={`light-dark-toggle ${className}`}
            icons={{
                checked: <FontAwesomeIcon inverse icon="sun" />,
                unchecked: <FontAwesomeIcon inverse icon="moon" />
            }}
        />
    )
};

export default ToggleMode;
