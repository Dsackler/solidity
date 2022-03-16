import { Hero, Breadcrumbs } from "@components/common"
import { BaseLayout } from "@components/common/layout"
import { CourseList } from "@components/course"
import { OrderCard } from "@components/orders"
import { EthRates, WalletDisplay } from "@components/web3"

export default function Home() {
  return (
    <BaseLayout>
      {/* Passing all of these into base layout as children*/}
      <Hero />
      <Breadcrumbs />
      <WalletDisplay />
      <EthRates />
      <OrderCard />
      <CourseList />
    </BaseLayout>
  )
}
