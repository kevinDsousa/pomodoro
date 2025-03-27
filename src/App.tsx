import { ThemeProvider } from "styled-components"
import { Button } from "./components/buton"
import { DefaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globals"

export const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />

      <GlobalStyle />
    </ThemeProvider>
  )
}