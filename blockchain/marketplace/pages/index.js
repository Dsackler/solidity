import { Hero, Breadcrumbs } from "@components/ui/common"
import { BaseLayout } from "@components/ui/layout"
import { CourseList } from "@components/ui/course"
import { OrderCard } from "@components/ui/orders"
import { EthRates, WalletDisplay } from "@components/ui/web3"
import { getAllCourses } from "@content/courses/fetcher"
import { useWeb3 } from "@components/providers"

export default function Home({courses}) { //we get courses from getStaticProps()
  const data = useWeb3()
  
  return (
    <BaseLayout>
      {/* Passing all of these into base layout as children*/}
      {data.test}
      <Hero />
      <Breadcrumbs />
      <WalletDisplay />
      <EthRates />
      <OrderCard />
      <CourseList
        courses = {courses}
      />
    </BaseLayout>
  )
}

export function getStaticProps() {
  const {data} = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}
