import Layout from "../components/layout/Layout"
import PageTitle from "../components/sections/PageTitle"
import Testimonial2 from "../components/sections/Testimonial2"

export default function PageTestimonial() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={3}>
    <PageTitle pageName="Testimonial" />

    <Testimonial2 />
    </Layout>
    </>
  )
}