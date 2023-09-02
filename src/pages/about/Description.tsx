import { createStyles } from "@mantine/core"
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconMailCheck } from "@tabler/icons-react"
import { Link } from "react-router-dom"

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
            display: 'none'
        },
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
                        <Link to=""><IconBrandFacebook />Follow on Facebook</Link>
                        <Link to=""><IconBrandInstagram />Follow on Instagram</Link>
                        <Link to=""><IconBrandLinkedin />Follow on LinkedIn</Link>
                        <Link to=""><IconBrandTwitter />Follow on Twitter</Link>
                        <Link to=""><IconBrandGithub />Follow on Github</Link>
                        <Link to=""><IconMailCheck />williamdreams@outlook.com</Link>
                    </div>
                </div>
                <div>
                    <h2>My name is Danquah Kwafo William. I hail from Kumasi, Ghana, where I bring to life Contemporary Web solutions</h2>
                    <p>
                        Once upon a time, I was a dreamer with my head in the stars. As a child, I had always been fascinated by the cosmos and the idea of exploring the great unknown as an astronaut. The idea of floating weightlessly in space, gazing down at our beautiful blue planet, and discovering the secrets of the universe filled me with an unquenchable curiosity and a burning desire to become an astronaut.                    </p>
                    <p>
                        My journey towards that lofty goal began with countless hours of stargazing, reading books about space, and watching every documentary on astronauts and space missions that I could get my hands on. My room was adorned with posters of rockets, planets, and the iconic image of astronauts walking on the moon. I knew the names of all the Apollo missions by heart and could recite the life stories of famous astronauts like Neil Armstrong and Sally Ride.                    </p>
                    <p>
                        As I got older, my passion for space only grew stronger. I excelled in my science and math classes, knowing that these subjects were crucial for anyone aspiring to join the ranks of NASA. I participated in science fairs, built model rockets, and even attended space camp, where I got a taste of what it might be like to train as an astronaut.                    </p>
                    <p>
                        However, as I reached my late teens, I began to realize that the path to becoming an astronaut was incredibly competitive and required not only exceptional academic and physical fitness but also a healthy dose of luck. The odds of making it to space were slim, and I started to consider alternative career paths.
                    </p>
                    <p>
                        Around the same time, I stumbled upon the field of Health Information Management (HIM). It piqued my interest because it combined my love for technology and my desire to contribute to the betterment of society. HIM professionals play a crucial role in managing and securing healthcare data, ensuring that patient records are accurate and confidential, and helping healthcare providers make informed decisions.                    </p>
                    <p>
                        As the years went by, my love for technology and my desire to continue learning led me down another path. I decided to pursue a career as a full-stack web developer. I enrolled in coding bootcamps, learned programming languages like JavaScript and Python, and began building websites and web applications from scratch.
                    </p>
                    <p>
                        My journey from aspiring astronaut to Health Information Management professional to full-stack web developer has been a winding one, but each step has been fueled by a passion for knowledge and a desire to make a positive impact. While I may not have reached the stars as an astronaut, I've found fulfillment and purpose in the world of healthcare and technology, and I continue to reach for new heights in my career as a web developer, always with my eyes on the horizon of possibilities.                    </p>

                </div>
            </div>
            <div className={classes.socialSmall}>
                <a href="facebook.com/danquah.william"><IconBrandFacebook />Follow on Facebook</a>
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