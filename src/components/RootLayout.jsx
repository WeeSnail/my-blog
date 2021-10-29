import React from 'react';
import ThemeProvider, { useTheme } from './ThemeProvider';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

/**
 * See: {@link https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react}
 * and check out `Using icons via Global Use`
*/
config.autoAddCss = false;
// Adding the icons to library here will allows us to refer to them by their
// icon string names; 'sun' and 'moon'. Check out ThemeToggle.jsx.
library.add(faSun, faMoon);

const MainWrapper = ({children}) => {
    const {theme} = useTheme();
    return (
        <React.Fragment>
            <div className={`main-wrapper ${theme.type}`}>
                {children}
            </div>
            <style>
                {`
                html, body {
                    background: ${theme.background};
                    color: ${theme.fontColor};
                    transition: all 0.2s ease-out;
                }
            `}
            </style>
        </React.Fragment>
    )
};

const RootLayout = ({children}) => {
    return (
        <ThemeProvider>
            <MainWrapper>{children}</MainWrapper>
        </ThemeProvider>
    )
};

export default RootLayout;
