import React from 'react'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoon2 } from '@tabler/icons-react';
import { IconMoonStars } from '@tabler/icons-react';

function ThemeModeToggler() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <ActionIcon
      variant=""
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title={dark?"Activate Light Mode": "Activate Dark Mode"}
    >
      {dark ? <IconSun size="2.1rem" color='white' /> : <IconMoonStars size="2.1rem" color='black' />}
    </ActionIcon>
  )
}

export default ThemeModeToggler;