import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { mapUserFromGithub } from "./helpers/users";
import { api } from "./services/api";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export type User = {
  name: string
  bio: string
  avatarUrl: string
  profileUrl: string
  username: string
  company: string
  createdAt: string
  totalOfRepos: number
  totalOfFollowers: number
  totalOfFollowings: number
  location: string
  socials: {
    twitterUsername: string
    blog: string
  }
}

export function App () {
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    api.get('/users/eduardogomesf')
      .then(response => {
        const { data } = response

        setUser(mapUserFromGithub(data))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <Header />
        <SearchForm
          changeUser={setUser}
          currentUsername={user.username}
        />
        <Profile user={user} />
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  )
}