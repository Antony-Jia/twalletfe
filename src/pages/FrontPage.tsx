import WithSubnavigation from '../components/Navbar'
import SmallWithSocial from '../components/Footer'
import CallToActionWithAnnotation from "../components/HeroSection"
import SimpleThreeColumns from "../components/Features"
import SplitWithImage from "../components/Testimonials"
import { Box } from '@chakra-ui/react'
import FrontPageTable from '../components/FrontPage/FrontPageTable'
import { dashboardTableData } from '../components/variables/general'

function FrontPage() {
  return (
    <Box>
      <WithSubnavigation />
      <CallToActionWithAnnotation />
      <FrontPageTable
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
      <SimpleThreeColumns />
      <SplitWithImage />
      <SmallWithSocial />
    </Box>
  )
}

export default FrontPage