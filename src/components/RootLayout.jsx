import React from 'react';
import {library, config} from '@fortawesome/fontawesome-svg-core';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';
import '../styles/global.scss';

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faSun, faMoon);

const RootLayout = ({ children }) => {
    return (
        <div className="theme-provider">
            {children}
        </div>
    )
};

export default RootLayout;