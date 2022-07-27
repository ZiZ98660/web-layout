import { Grid } from '../Grid/Grid.styled'
import SideBarOne from '../SideBarOne/SideBarOne'
import SideBarTwo from '../SideBarTwo/SideBarTwo'
import MainSection from '../MainSection/MainSection'

const Section = () => (
  
   <Grid>
      <SideBarOne />   
      <MainSection />
      <SideBarTwo />
   </Grid> 
  
)

export default Section