import React from 'react'
import { HeaderComponent } from './components/Header'
import { ColorScheme, ColorSchemeProvider, MantineProvider, Paper } from '@mantine/core'
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

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
  return (
    <>
      <HeaderComponent />
    </>
    )
}

export default App
