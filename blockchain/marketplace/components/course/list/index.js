import { CourseOutline } from "../individualCourse";


export default function CourseList({courses}) {
    return (
        <div className = "grid grid-cols-2 gap-4 mb-5 pt-4">
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