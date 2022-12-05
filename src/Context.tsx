import { ReactElement, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

const MyContext = createContext({ theme: 'light' });

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <MyContext.Provider value={props.theme}>
            {props.children}
        </MyContext.Provider>
    );
}

export function useTheme(): Theme {
    const theme = useContext(MyContext);
    return theme;
}
