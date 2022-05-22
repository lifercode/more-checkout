import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from './config/theme'
import { Context } from './context'
import Routes from './routes'

export default function App() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider theme={theme[colorScheme]}>
      <Context>
        <Routes />
      </Context>
    </ThemeProvider>
  )
}
