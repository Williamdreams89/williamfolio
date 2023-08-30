import {Paper, Container, createStyles} from "@mantine/core"
import { HeaderComponent } from "../../components/Header"
import Description from "./Description"
import FooterComponent from "../../components/FooterComponent"

const useStyles = createStyles((theme)=>({}))
const About = () => {
    const {theme, classes} = useStyles()
  return (
    <Paper>
        <div style={{width:'75vw', margin:'auto'}}>
            <HeaderComponent />
            <Description />
            <FooterComponent />
        </div>
    </Paper>
  )
}

export default About