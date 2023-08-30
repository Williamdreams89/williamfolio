import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function ThemeModeToggler() {
  return (
    <ActionIcon
      variant="outline"
      title="Toggle color scheme"
    >
      <IconSun size="1.1rem" />
    </ActionIcon>
  );
}

export default ThemeModeToggler;