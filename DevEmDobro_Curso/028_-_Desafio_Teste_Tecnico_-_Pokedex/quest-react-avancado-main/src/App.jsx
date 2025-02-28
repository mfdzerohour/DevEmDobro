import { createGlobalStyle } from 'styled-components'
import { AppRoutes } from './pages/routes'
import { ThemeProvider } from './context/theme-contexts'






function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "DM Sans", serif;
  text-decoration: none;
  list-style:none;
  *:visited{
  color: inherit;
  }
}
`
export default App