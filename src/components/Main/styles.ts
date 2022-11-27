import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 47.625rem;
    width: 100%;
    margin: 9rem auto 3rem;
    padding: 0 2rem;

    @media (max-width: 450px) {
        margin-top: 2rem;
        margin-bottom: 2rem;

        padding: 0 1rem;
    }

    @media (max-width: 768px) {
        margin-top: 4rem;
        margin-bottom: 2rem;
    }
`