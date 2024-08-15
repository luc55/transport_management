import Layout from "../components/layout/Layout"
import Banner5 from "../components/sections/Banner5"
import CallToAction5 from "../components/sections/CallToAction5"
import News5 from "../components/sections/News5"
import Pricing5 from "../components/sections/Pricing5"
import Progress5 from "../components/sections/Progress5"
import Projects5 from "../components/sections/Projects5"
import Projects52 from "../components/sections/Projects52"
import Services5 from "../components/sections/Services5"
import Services52 from "../components/sections/Services52"
import Services53 from "../components/sections/Services53"
import Team5 from "../components/sections/Team5"
import Video5 from "../components/sections/Video5"
export default function Home5() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={4}>
                <Banner5 />
                <Services5 />
                <Services52 />
                <Services53 />
                <Team5 />
                <Progress5 />
                <Projects5 />
                <Projects52 />
                <Pricing5 />
                <Video5 />
                <News5 />
                <CallToAction5 />
            </Layout>
        </>
    )
}