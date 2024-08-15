import Layout from "../components/layout/Layout"
import PageTitle from "../components/sections/PageTitle"
import ShopCheckout from "../components/sections/innerpages/ShopCheckout"

export default function PageShopCheckout() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={3}>
    <PageTitle pageName="Shop Checkout" />

    <ShopCheckout />
    </Layout>
    </>
  )
}