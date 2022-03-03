import { Navbar, Hero, Footer, Breadcrumbs } from "@components/common"
import { EthRates, WalletDisplay } from "@components/web3"

export default function Home() {
  return (
    
    <div class = "container-md">
      <Navbar />
      <Hero />
      <Breadcrumbs />
      <WalletDisplay />
      <EthRates />
      <Footer />
    </div>
  )
}
