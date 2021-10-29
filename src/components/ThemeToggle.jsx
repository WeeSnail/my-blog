import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTheme} from './ThemeProvider';

const ToggleMode = ({className}) => {
    const { switchTheme } = useTheme();
    return (
        <Toggle
            onChange={switchTheme}
            className={`light-dark-toggle ${className}`}
            icons={{
                unchecked: <FontAwesomeIcon inverse icon='sun' />,
                checked: <FontAwesomeIcon inverse icon="moon" />
            }}
        />
    )
};

export default ToggleMode;
