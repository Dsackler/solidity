import { Hero, Breadcrumbs } from "@components/ui/common"
import { BaseLayout } from "@components/ui/layout"
import { CourseList } from "@components/ui/course"
import { OrderCard } from "@components/ui/orders"
import { EthRates, WalletDisplay } from "@components/ui/web3"
import { getAllCourses } from "@content/courses/fetcher"
import { CourseOutline } from "@components/ui/course/individualCourse"

export function Home({courses}) { //we get courses from getStaticProps()

  return (
    <>
      {/* Passing all of these into base layout as children*/}
      <Hero />
      <Breadcrumbs />
      <WalletDisplay />
      <EthRates />
      <OrderCard />
      <CourseList courses = {courses} >
          {/* //this is what is being passed in as children */}
          { course => <CourseOutline key = {course.id} courseInfo = {course}/> } 
      </CourseList>
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
