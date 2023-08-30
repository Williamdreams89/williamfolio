import {Paper, Container, createStyles} from "@mantine/core"
import { HeaderComponent } from "../../components/Header"

const useStyles = createStyles((theme)=>({}))
const About = () => {
    const {theme, classes} = useStyles()
  return (
    <Paper>
        <Container style={{}}>
            <HeaderComponent />
        </Container>
    </Paper>
  )
}

export default About