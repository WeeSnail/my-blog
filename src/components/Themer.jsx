import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const ToggleMode = ({className}) => {
    return (
        <Toggle
            className={`ligh-dark-toggle ${className}`}
            icons={{
                checked: <h1>che</h1>,
                unchecked: <h1>unch</h1>
            }}
        />
    )
};

export default ToggleMode;
