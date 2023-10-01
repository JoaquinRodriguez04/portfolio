import { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const PortContext = createContext();

const themeLS = JSON.parse(localStorage.getItem('theme')) || false;

export const PortProvider = ({children}) => {

    const [theme, setTheme] = useState(themeLS);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <PortContext.Provider value={{
            theme, 
            setTheme
        }}>
            {children}
        </PortContext.Provider>
    ) 
};