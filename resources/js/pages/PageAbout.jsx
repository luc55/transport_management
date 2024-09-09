import Layout from "../components/layout/Layout"
import PageTitle from "../components/sections/PageTitle"
import About3 from "../components/sections/About3"
import Services3 from "../components/sections/Services3"
import Team1 from "../components/sections/Team1"
import Newsletter1 from "../components/sections/Newsletter1"

export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={3}>
    <PageTitle pageName="About Us" />

    <About3 addClass={"pt-100"}/>
    <Services3 addClass={"pt-100"} />
    <Team1 addClass={"pb-0"} />
    <Newsletter1 addClass={"pb-0"} />
    </Layout>
    </>
  )
}