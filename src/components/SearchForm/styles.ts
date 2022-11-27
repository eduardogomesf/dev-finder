import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    margin-top: 2.25rem;
    padding: 0.625rem 0.625rem 0.625rem 2rem;
    
    background-color: ${({ theme }) => theme.colors.card};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

    border-radius: 15px;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    > svg {
        color: ${({ theme }) => theme.colors.active};
    }

    > input {
        border: none;
        background-color: transparent;

        flex: 1;

        font-weight: 400;
        font-size: ${({ theme }) => theme.fonts['1.5xl']};
        line-height: 25px;

        color: ${({ theme }) => theme.colors.darkText};
        outline: none;

        &::placeholder {
            color: ${({ theme }) => theme.colors.text};
        }
    }

    > span {
        font-weight: 700;
        font-size: ${({ theme }) => theme.fonts.md};
        line-height: 22px;

        color: ${({ theme }) => theme.colors.error};

        @media (max-width: 450px) {
            display: none;
        } 
    }

    > button {
        padding: 0.875rem 1.5rem;
        
        background-color: ${({ theme }) => theme.colors.active};
        color: ${({ theme }) => theme.colors.buttonText};

        border-radius: 10px; 
        border: none;

        font-weight: 700;
        font-size: ${({ theme }) => theme.fonts.xl};
        line-height: 24px;

        &:not(:disabled):hover {
            transition: background-color 0.5s;
            background-color: ${({ theme }) => theme.colors.activeHighlight};
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

    @media (max-width: 450px) {
        padding: 0.5625rem 0.5rem;

        gap: 0.5rem;

        > input {
            font-size: ${({ theme }) => theme.fonts['sm']};
        }

        > svg {
            width: 20px;
            height: 20px;
        }

        > button {
            padding: 0.75rem 1.125rem;
        }
    }
`