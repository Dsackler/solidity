
import { BaseLayout } from "@components/ui/layout"
import { CourseList } from "@components/ui/course"
import { WalletDisplay } from "@components/ui/web3"
import { getAllCourses } from "@content/courses/fetcher"
import { CourseOutline } from "@components/ui/course/individualCourse"
import { useAccount, useNetwork } from "@components/hooks/web3"

export function Marketplace({courses}) { //we get courses from getStaticProps()
  const { network } = useNetwork()
  const { account } = useAccount()

  return (
    <>
      {/* Passing all of these into base layout as children*/}
      <div className = "pt-4">
        <WalletDisplay network = {network} account = {account}/>
      </div>

      <CourseList courses = {courses} >
        {/* //this is what is being passed in as children */}
        { course => 
          <CourseOutline 
            key = {course.id} 
            courseInfo = {course}
            Footer = {() => 
              <div className = "mt-3">
                <a className="btn btn-outline-primary">
                  Purchase
                </a>
              </div>
            }
            /> 
        }
      </CourseList>
    </>
  )
}

export default function PageInjections({...props}) {
  return (
    <BaseLayout>
    {/* Pretty sure this passes all of BaseLayout's props to home */}
      <Marketplace {...props} />
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
