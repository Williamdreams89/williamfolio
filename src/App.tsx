import React from 'react'
import { HeaderComponent } from './components/Header'
import { ColorScheme, ColorSchemeProvider, Container, MantineProvider, Paper, createStyles } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import About from './pages/about/About';


const useStyle = createStyles((theme)=>({
  container:{
    backgroundColor: theme.colorScheme === 'light'? 'rgba(250, 250, 250, 1)':'',
    [theme.fn.largerThan('sm')]:{
      width:'70vw',
      margin:'auto',
      height:'100%',
    }
  }
}))
const App = () => {
  // Use of the localstorage to store user preferred theme
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const {theme, classes}=useStyle()
  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
              <About />
              <div style={{height:300}}></div>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default App
