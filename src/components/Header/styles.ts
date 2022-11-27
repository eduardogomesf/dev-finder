import styled from "styled-components";

export const Container = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-weight: 700;
        font-size: ${({ theme }) => theme.fonts["3xl"]};
        line-height: 39px;

        color: ${({ theme }) => theme.colors.title};
    }

    button {
        border: none;
        background-color: transparent;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-weight: 700;
        font-size: ${({ theme }) => theme.fonts.sm};
        line-height: 19px;
        letter-spacing: 2.5px;
        text-transform: uppercase;

        color: ${({ theme }) => theme.colors.lightText};

        > svg {
            width: 20px;
            height: 20px;

            color: ${({ theme }) => theme.colors.lightText};
        }

        &:hover {
            transition: color 0.2s;
            color: ${({ theme }) => theme.colors.darkText};

            > svg {
                transition: color 0.2s;
                color: ${({ theme }) => theme.colors.darkText};
            }
        }
    }
`