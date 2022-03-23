import { CourseOutline } from "../individualCourse";


export default function CourseList({courses}) {
    return (
        //lg:grid-cols-2 means it will show two columns on a large screen, md:grid-cols-1 shows one col for small screen
        <div className = "grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5 pt-4"> 
            {courses.map(course =>
                <div
                    key = {course.id}
                >
                    <CourseOutline 
                        courseInfo = {course}
                    />
                </div>
                
            )}
        </div>
        // <div class="container pt-3">
        //     <div class="row">
        //         <div class="col-sm">
        //             <CourseOutline />
        //         </div>
        //         <div class="col-sm">
        //             <CourseOutline />
        //         </div>
        //         <div class="w-100 pb-4"></div>
        //         <div class="col-sm">
        //             <CourseOutline />
        //         </div>
        //         <div class="col-sm">
        //             <CourseOutline />
        //         </div>
        //     </div>
        // </div>
    )
}