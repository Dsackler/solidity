import { Hero, Breadcrumbs } from "@components/common"
import { BaseLayout } from "@components/common/layout"
import { CourseList } from "@components/course"
import { OrderCard } from "@components/orders"
import { EthRates, WalletDisplay } from "@components/web3"
import { getAllCourses } from "@content/courses/fetcher"

export default function Home({courses}) { //we get courses from getStaticProps()
  return (
    <BaseLayout>
      {/* Passing all of these into base layout as children*/}
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
