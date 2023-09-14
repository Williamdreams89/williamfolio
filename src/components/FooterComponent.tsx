import React, {useState} from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Group, createStyles, rem } from '@mantine/core';

const HEADER_HEIGHT = rem(100);

const useStyles = createStyles((theme) => ({
    links: {
      padding: '1.3rem 2.3rem',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      [theme.fn.smallerThan('sm')]: {
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
      fontWeight: 600,
  
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

    footerGroup:{
        display: 'flex',
        marginTop:'4rem',
        alignItems: 'center',
        justifyContent:'space-around',
        gap: '6rem',
        boxShadow: '0px -8px 15px -3px rgba(0,0,0,0.1)',
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column'
          },
    }
  }));
const links = [
    { link: "https://www.example.com", label: "About" },
    { link: "https://www.openai.com", label: "Education" },
    { link: "https://www.google1.com", label: "Projects" },
    { link: "https://www.google2.com", label: "Contact" },
];


const FooterComponent = () => {
    const [opened, { toggle, close }] = useDisclosure(false);
//   const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.link)}
          onClick={(event) => {
            event.preventDefault();
            // setActive(link.link);
            close();
          }}
        >
          {link.label}
        </a>
      ));
      const date = new Date()
  return (
    <div className={classes.footerGroup}>
        <Group spacing={3} className={classes.links}>
          {items}
        </Group>
        <p>&copy; {date.getFullYear()} Danquah Kwafo William. All right reserved</p>
    </div>
  )
}

export default FooterComponent