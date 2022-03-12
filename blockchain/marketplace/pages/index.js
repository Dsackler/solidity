import { Navbar, Hero, Footer, Breadcrumbs } from "@components/common"
import { CourseList } from "@components/course"
import { OrderCard } from "@components/orders"
import { EthRates, WalletDisplay } from "@components/web3"

export default function Home() {
  return (
    
    <div className = "container-md">
      <Navbar />
      <Hero />
      <Breadcrumbs />
      <WalletDisplay />
      <EthRates />
      <OrderCard />
      <CourseList />
      <Footer />
    </div>
  )
}
