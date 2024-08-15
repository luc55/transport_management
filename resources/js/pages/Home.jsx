import Layout from "../components/layout/Layout"
import About1 from "../components/sections/About1"
import Banner1 from "../components/sections/Banner1"
import CallToAction1 from "../components/sections/CallToAction1"
import Funfact1 from "../components/sections/Funfact1"
import News1 from "../components/sections/News1"
import Newsletter1 from "../components/sections/Newsletter1"
import Process1 from "../components/sections/Process1"
import Projects1 from "../components/sections/Projects1"
import Services1 from "../components/sections/Services1"
import Team1 from "../components/sections/Team1"
import Testimonial1 from "../components/sections/Testimonial1"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner1 />
                <Process1 />
                <About1 addClass={"pt-0"}/>
                <Projects1 />
                <CallToAction1 />
                <Services1 />
                <Funfact1 />
                <Team1 />
                <Testimonial1 />
                <Newsletter1 />
                <News1 />
            </Layout>
        </>
    )
}