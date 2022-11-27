import { MagnifyingGlass } from 'phosphor-react'
import { FormEvent, useState } from 'react';
import { User } from '../../App';
import { mapUserFromGithub } from '../../helpers/users';
import { api } from '../../services/api';
import { Container } from "./styles";

type SearchFormProps = {
    changeUser: (user: User) => void
    currentUsername: string
}

export function SearchForm ({ changeUser, currentUsername }: SearchFormProps) {
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')

    async function handleSubmit (event: FormEvent) {
        try {
            event.preventDefault()

            if (!username) {
                return
            }

            if (currentUsername === username) {
                setUsername('')
                return
            }

            setError('')

            const response = await api.get(`/users/${username}`)

            const { data } = response

            changeUser(mapUserFromGithub(data))
            setUsername('')
        } catch (err: any) {
            if (err.response.status === 404) {
                setError('No results')
                return
            }

            setError('Try again')
        }
    }

    return (
        <Container onSubmit={handleSubmit}>
            <MagnifyingGlass size={24} />

            <input
                placeholder='Search Github username...'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {!!error && <span>{error}</span>}

            <button
                type='submit'
                disabled={!username}
            >
                Search
            </button>
        </Container>
    )
}