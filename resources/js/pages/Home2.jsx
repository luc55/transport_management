import Layout from "../components/layout/Layout"
import About2 from "../components/sections/About2"
import Banner2 from "../components/sections/Banner2"
import CallToAction2 from "../components/sections/CallToAction2"
import ContactTab2 from "../components/sections/ContactTab2"
import Funfact2 from "../components/sections/Funfact2"
import News2 from "../components/sections/News2"
import Process2 from "../components/sections/Process2"
import Progress2 from "../components/sections/Progress2"
import Services2 from "../components/sections/Services2"
import Team2 from "../components/sections/Team2"
import Testimonial2 from "../components/sections/Testimonial2"
import Map from "../components/sections/Map"
export default function Home2() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner2 />
                <CallToAction2 />
                <About2 />
                <Funfact2 />
                <Services2 />
                <Process2 />
                <Progress2 />
                <Team2 />
                <ContactTab2 />
                <Testimonial2 />
                <News2 />
                <Map />
            </Layout>
        </>
    )
}