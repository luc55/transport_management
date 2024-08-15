import Layout from "../components/layout/Layout"
import About4 from "../components/sections/About4"
import Banner4 from "../components/sections/Banner4"
import CallToAction4 from "../components/sections/CallToAction4"
import Funfact4 from "../components/sections/Funfact4"
import Map4 from "../components/sections/Map4"
import News1 from "../components/sections/News1"
import Projects4 from "../components/sections/Projects4"
import Projects45 from "../components/sections/Projects45"
import Services4 from "../components/sections/Services4"
import Services45 from "../components/sections/Services45"
import Team4 from "../components/sections/Team4"
import Testimonial2 from "../components/sections/Testimonial2"
import WhyChooseUs4 from "../components/sections/WhyChooseUs4"
export default function Home4() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner4 />
                <Services4 />
                <Funfact4 />
                <Team4 />
                <Services45 />
                <Projects4 />
                <About4 />
                <CallToAction4 />
                <WhyChooseUs4 />
                <Projects45 />
                <Testimonial2 />
                <News1 />
                <Map4 />
            </Layout>
        </>
    )
}