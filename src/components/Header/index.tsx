import { Moon, Sun } from 'phosphor-react'
import { useState } from 'react';
import { Container } from "./styles";

export function Header () {
    const [theme, setTheme] = useState('light')

    function handleSwitchThemes () {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    return (
        <Container>
            <h1>devfinder</h1>

            <button onClick={handleSwitchThemes}>
                {theme === 'light' ? 'DARK' : 'LIGHT'}
                {theme === 'light' ?
                    (
                        <Moon weight='fill' size={20} />
                    ) :
                    (
                        <Sun weight='fill' size={20} />
                    )
                }
            </button>
        </Container>
    )
}