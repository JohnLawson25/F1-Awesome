import React from "react";
import { useTheme } from "../context/DarkModeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return(
        <button onClick={ toggleTheme } 
        style={{
        padding: '8px 16px',
        cursor: 'pointer',
        borderRadius: '20px',
        border: '1px solid var(--text-color)',
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color)' 
      }} > {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
};

export default ThemeToggle;