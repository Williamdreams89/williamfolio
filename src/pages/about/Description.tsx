import { createStyles } from "@mantine/core"
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconMailCheck } from "@tabler/icons-react"

const useStyles = createStyles(theme => ({
    main: {
        width: '100%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '9rem',
        flexDirection: 'row-reverse',
        height: '100%',
        position: 'relative',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
        }
    },
    decriptImage: {
        objectFit: 'cover',
        width: '400px',
        height: '400px',
        borderRadius: '2rem',
        transform: 'rotate(8deg)',

        [theme.fn.smallerThan('sm')]: {
            width: '80vw'
        }
    },
    socials: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

        [theme.fn.smallerThan('md')]: {
            display: 'none'
        },
        
    },
    socialSmall: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

        [theme.fn.largerThan('md')]: {
            display:'none'
        },
        'a':{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            color: theme.colorScheme === 'dark' ? 'white' : 'black',
            textDecoration: 'none',

            '&:nth-of-type(6)': {
                marginTop: '4rem'
            }
        }
    },
    pictureSocial: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',

        'a': {
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            color: theme.colorScheme === 'dark' ? 'white' : 'black',
            textDecoration: 'none',

            '&:nth-of-type(6)': {
                marginTop: '4rem'
            }
        }
    }
}))
const Description = () => {
    const { classes } = useStyles()
    return (
        <>
            <div className={classes.main}>
                <div className={classes.pictureSocial}>
                    <img src="/images/portrait.webp" alt="" className={classes.decriptImage} />
                    <div className={classes.socials}>
                        <a href=""><IconBrandFacebook />Follow on Facebook</a>
                        <a href=""><IconBrandInstagram />Follow on Instagram</a>
                        <a href=""><IconBrandLinkedin />Follow on LinkedIn</a>
                        <a href=""><IconBrandTwitter />Follow on Twitter</a>
                        <a href=""><IconBrandGithub />Follow on Github</a>
                        <a href=""><IconMailCheck />williamdreams@outlook.com</a>
                    </div>
                </div>
                <div>
                    <h2>My name is Danquah Kwafo William. I hail from Kumasi, Ghana, where I bring to life Contemporary Web solutions</h2>
                    <p>
                        I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
                    </p>
                    <p>
                        The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.
                    </p>
                    <p>
                        I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.
                    </p>
                    <p>
                        Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.        </p>
                </div>
            </div>
            <div className={classes.socialSmall}>
                <a href=""><IconBrandFacebook />Follow on Facebook</a>
                <a href=""><IconBrandInstagram />Follow on Instagram</a>
                <a href=""><IconBrandLinkedin />Follow on LinkedIn</a>
                <a href=""><IconBrandTwitter />Follow on Twitter</a>
                <a href=""><IconBrandGithub />Follow on Github</a>
                <a href=""><IconMailCheck />williamdreams@outlook.com</a>
            </div>
        </>
    )
}

export default Description