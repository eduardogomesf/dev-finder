import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }

    body, input, button, textarea, select {
        font-family: 'Space Mono', monospace;
        font-size: ${({ theme }) => theme.fonts.md};
    }
`