
import { BaseLayout } from "@components/ui/layout";
import { Curriculum, Keypoints } from "@components/ui/course";
import Hero from "@components/ui/course/hero";
import { getAllCourses } from "@content/courses/fetcher";




export default function Course({course}) {
    return (
      <BaseLayout>
        <Hero 
          title = {course.title}
          description = {course.description}
          image = {course.coverImage}
        />
        <Keypoints 
          keypoints = {course.wsl}
        />
        <Curriculum 
          locked = {true}
        />
      </BaseLayout>
    )
  }


  export function getStaticPaths() {
    const {data} = getAllCourses()
    
    return {
      paths: data.map(course => ({ //array of how many pages I want to render. For me, it will be 15, one for each course
        params: { //this is just kinda returned and accessable to other functions. This is why you can just put {params} in the function below
          slug: course.slug
        }
      })),
      fallback: false
    }
  }

  export function getStaticProps({params}) {
    const {data} = getAllCourses()
    const course = data.filter(c => c.slug === params.slug)[0] //makes an array of a single course where the parameters slug matches the data's slug

    return {
      props: { //this is also just kinda returned and accessible to other functions. That is why is it passed into the above function as {course}. If it was passed in as {courseblah}, it would not work
        course
      }
    }
  }