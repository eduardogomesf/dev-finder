import { Moon } from 'phosphor-react'
import { Container } from "./styles";

export function Header () {
    return (
        <Container>
            <h1>devfinder</h1>

            <button>
                DARK
                <Moon weight='fill' size={20} />
            </button>
        </Container>
    )
}