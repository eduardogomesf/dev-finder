import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <Header />
        <SearchForm />
        <Profile />
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  )
}