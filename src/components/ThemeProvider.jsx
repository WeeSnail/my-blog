import React, {
    createContext,
    useContext,
    useState,
    useCallback,
    useMemo
} from 'react';
/* ----------------------------------------------------------------------------
 * It would be a better idea nex time to try `Provider` from redux.
---------------------------------------------------------------------------- */
const themes = {
  light: {
    type: 'light',
      background: '#d4d4d4',
      // fontColor: '#10162f'
      fontColor: '#444'
    },
  dark: {
    type: 'dark',
    background: '#10162f',
      fontColor: '#d8d8d8'
    }
};

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
    /*Default dark*/
    const [theme, setTheme] = useState(themes.dark);
    const switchTheme = useCallback(
        // Checks the theme's value.
        () => setTheme(theme === themes.dark ? themes.light : themes.dark),
        [theme]
    );
    /*
    Need to expose the theme+functionality, so I can change it from somwhere else.
    I need to provide the same api even if the component reexecuted :( reevaluate
    only if theme or switchTheme change/ useMemo().
    */
    const themeConfig = useMemo( () => ( {theme, switchTheme} ), [theme, switchTheme]);

    return (
            <ThemeContext.Provider value={themeConfig}>
                {children}
            </ThemeContext.Provider>
        )
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
