import Layout from "../components/common/Layout"
import AboutComponent from "../components/about"
import Intro1 from "../components/about/Intro1"
import Intro2 from "../components/about/Intro2"

const About = () => {
  return (
    <Layout>
      {/* <AboutComponent/> */}
      <Intro1/>
      <Intro2/>
    </Layout>
  )
}

export default About