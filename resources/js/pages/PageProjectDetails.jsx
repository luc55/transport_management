import Layout from "../components/layout/Layout"
import PageTitle from "../components/sections/PageTitle"
import ProjectDetails from "../components/sections/innerpages/ProjectDetails"
export default function PageProjectDetails() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={3}>
    <PageTitle pageName="Project Details" />
    <ProjectDetails />
    </Layout>
    </>
  )
}