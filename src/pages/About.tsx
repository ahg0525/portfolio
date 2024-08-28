import Layout from "../components/common/Layout"
// import AboutComponent from "../components/about"
import Intro1 from "../components/about/Intro1"
import Intro2 from "../components/about/Intro2"
import Intro3 from "../components/about/Intro3"
import Intro4 from "../components/about/Intro4"

const About = () => {
  return (
    <Layout>
      {/* <AboutComponent/> */}
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Intro4/>
    </Layout>
  )
}

export default About