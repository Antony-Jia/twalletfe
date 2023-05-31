import WithSubnavigation from '../components/Navbar'
import SmallWithSocial from '../components/Footer'
import CallToActionWithAnnotation from "../components/HeroSection"
import SimpleThreeColumns from "../components/Features"
import SplitWithImage from "../components/Testimonials"
import { Box } from '@chakra-ui/react'

function FrontPage() {
  return (
    <Box>
      <WithSubnavigation />
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <SplitWithImage />
      <SmallWithSocial />
    </Box>
  )
}

export default FrontPage