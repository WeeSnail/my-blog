{/* It would be a better idea to try Provider from redux */}

import React, { createContext, useContext } from 'react';

const themes = {
    light: {
        type: 'light',
        background: '#fff',
        fontColor: '#2b2c38'
    },
    dark: {
        type: 'dark',
        background: '#2v2c38',
        fontColor: '#d8d8d8'
    }
};

const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.Provider value={thmes.dark}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
