import { Hero, Breadcrumbs } from "@components/ui/common"
import { BaseLayout } from "@components/ui/layout"
import { CourseList } from "@components/ui/course"
import { OrderCard } from "@components/ui/orders"
import { EthRates, WalletDisplay } from "@components/ui/web3"
import { getAllCourses } from "@content/courses/fetcher"

export function Home({courses}) { //we get courses from getStaticProps()

  return (
    <>
      {/* Passing all of these into base layout as children*/}
      <Hero />
      <Breadcrumbs />
      <WalletDisplay />
      <EthRates />
      <OrderCard />
      <CourseList
        courses = {courses}
      />
    </>
  )
}

export default function PageInjections({...props}) {
  return (
    <BaseLayout>
    {/* Pretty sure this passes all of BaseLayout's props to home */}
      <Home {...props} />
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
