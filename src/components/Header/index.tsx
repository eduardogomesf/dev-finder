import { Moon, Sun } from 'phosphor-react'
import { useState } from 'react';
import { darkTheme } from '../../styles/themes/dark';
import { defaultTheme } from '../../styles/themes/default';
import { Container } from "./styles";

type HeaderProps = {
    changeTheme: (theme: any) => void
}

export function Header ({ changeTheme }: HeaderProps) {
    const [theme, setTheme] = useState('light')

    function handleSwitchThemes () {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        changeTheme(newTheme === 'light' ? defaultTheme : darkTheme)
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