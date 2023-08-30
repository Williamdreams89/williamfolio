import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Avatar,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ThemeModeToggler from './ThemeModeToggler';
import { IconChevronDown } from "@tabler/icons-react";
import { HoverCard, Menu, SimpleGrid } from "@mantine/core"
import {Link} from 'react-router-dom'



const HEADER_HEIGHT = rem(100);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    border: 'none',
    marginBottom: '4rem'
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 4px -4px 15px -3px rgba(0,0,0,0.1)',
    padding: '1.3rem 2.3rem',
    borderRadius: '2.5rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 800,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      // backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
  main: {
    borderRadius: '3rem',
    padding: '1rem 2rem', 
    display: 'flex',
    justifyContent:'space-around',
    alignItems: 'center'

},
profileImage:{
  borderRadius:'100%',
  width:'3.5rem',
  height:'3.5rem',
  objectFit:'cover'
}
}));


const links = [
    { link: "/", label: "About" },
    { link: "/achievements/", label: "Achievements" },
    { link: "/projects", label: "Projects" },
    { link: "/contact", label: "Contact" },
];

export function HeaderComponent() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        {/* <Avatar /> */}
        <img src={'/images/willie.jpg'} className={classes.profileImage} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        <ThemeModeToggler />
      </Container>
    </Header>
  );
}