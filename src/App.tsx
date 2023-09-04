import React from 'react'
import { HeaderComponent } from './components/Header'
import { ColorScheme, ColorSchemeProvider, Container, MantineProvider, Paper, createStyles } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import About from './pages/about/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Achievements from './pages/achievements/Achievements';
import AutoLoadingAnim from './routes/AutoLoadingAnim';

const useStyle = createStyles((theme)=>({
  container:{
    backgroundColor: theme.colorScheme === 'light'? 'rgba(250, 250, 250, 1)':'',
    [theme.fn.largerThan('sm')]:{
      width:'90vw',
      margin:'auto',
    }
  }, 
  main:{
    "::-webkit-scrollbar":{
      display: 'none'
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
    <main className={classes.main}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Paper w={'100vw'}>
            {/* <AutoLoadingAnim /> */}
            <div className={classes.container}>
              <Router>
                <Routes>
                  <Route path='/' element={<About />} />
                  <Route path='/achievements' element={<Achievements />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
              </Router>
            </div>
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </main>
  )
}

export default App
