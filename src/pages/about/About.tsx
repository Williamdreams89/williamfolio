import {Paper, Container, createStyles} from "@mantine/core"
import { HeaderComponent } from "../../components/Header"
import Description from "./Description"

const useStyles = createStyles((theme)=>({}))
const About = () => {
    const {theme, classes} = useStyles()
  return (
    <Paper>
        <div style={{width:'75vw', margin:'auto'}}>
            <HeaderComponent />
            <Description />
        </div>
    </Paper>
  )
}

export default About