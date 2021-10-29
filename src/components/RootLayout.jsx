import React from 'react';
import ThemeProvider from './ThemeProvider';
import {library, config} from '@fortawesome/fontawesome-svg-core';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faSun, faMoon);

const RootLayout = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
};

export default RootLayout;
