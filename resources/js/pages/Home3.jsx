import Layout from "../components/layout/Layout"
import About3 from "../components/sections/About3"
import Banner3 from "../components/sections/Banner3"
import Features3 from "../components/sections/Features3"
import News3 from "../components/sections/News3"
import Projects3 from "../components/sections/Projects3"
import Services3 from "../components/sections/Services3"
import Team1 from "../components/sections/Team1"
import Testimonial3 from "../components/sections/Testimonial3"
import Video3 from "../components/sections/Video3"
import WhyChooseUs3 from "../components/sections/WhyChooseUs3"
import WorkSection3 from "../components/sections/WorkSection3"
export default function Home3() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner3 />
                <About3 />
                <Features3 />
                <Video3 />
                <Services3 />
                <Team1 />
                <WhyChooseUs3 />
                <Projects3 />
                <Testimonial3 />
                <WorkSection3 />
                <News3 />
            </Layout>
        </>
    )
}