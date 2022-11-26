import { ThemeProvider } from "styled-components";
import { Main } from "./components/Main";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <h1>asdasdas</h1>
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  )
}