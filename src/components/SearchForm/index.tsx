import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react';
import { Container } from "./styles";

export function SearchForm () {
    const [hasError, setHasError] = useState(true)

    return (
        <Container>
            <MagnifyingGlass size={24} />
            <input placeholder='Search Github username...' />
            {hasError && <span>No results</span>}
            <button>Search</button>
        </Container>
    )
}