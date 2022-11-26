import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { SearchForm } from "./components/SearchForm";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <Header />
        <SearchForm />
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  )
}