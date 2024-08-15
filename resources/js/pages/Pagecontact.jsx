import Layout from "../components/layout/Layout"
import PageTitle from "../components/sections/PageTitle"
import Contact from "../components/sections/innerpages/Contact"
export default function Pagecontact() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={3}>
    <PageTitle pageName="Contact Us" />
    <Contact />
    </Layout>
    </>
  )
}