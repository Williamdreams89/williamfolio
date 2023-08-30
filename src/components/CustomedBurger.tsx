import { IconChevronDown } from "@tabler/icons-react";
import { HoverCard, Menu, SimpleGrid, createStyles } from "@mantine/core"
import { useState } from "react";


const useStyles = createStyles((theme) => ({
    main: {
        borderRadius: '3rem',
        padding: '1rem 2rem', 
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center'

    }
}))

const links = [
    { link: "https://www.example.com", label: "About" },
    { link: "https://www.openai.com", label: "Education" },
    { link: "https://www.google1.com", label: "Projects" },
    { link: "https://www.google2.com", label: "Contact" },
];

function CustomedBurger() {
    const [opened, setOpened] = useState(true)
    return (
        <>
        <Menu.Target >
            <main>
                <h2>Menu</h2>
                <IconChevronDown />
            </main>
        </Menu.Target>
        <Menu.Dropdown>
            <SimpleGrid cols={2} spacing={0}>

            </SimpleGrid>
        </Menu.Dropdown>
        </>
    )
}


export default CustomedBurger;