import Layout from "../components/layout/Layout"
import PageTitle from "../components/sections/PageTitle"
import ProjectGrid from "../components/sections/innerpages/ProjectGrid"
export default function PageProjectGrid() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={3}>
    <PageTitle pageName="Project Grid" />
    <ProjectGrid />
    </Layout>
    </>
  )
}