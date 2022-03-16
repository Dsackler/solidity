import { CourseOutline } from "../individualCourse";


export default function CourseList() {
    return (
        <div className = "pt-3">
            <ul className = "list-group list-group-flush">
                <li className="list-group-item">
                    <div className = "row pb-4 px-10">
                        <div className = "col-sm">
                            <CourseOutline />
                        </div>
                        <div className = "col-sm">
                            <CourseOutline />
                        </div>
                    </div>
                    <div className = "row px-10">
                        <div className = "col-sm">
                            <CourseOutline />
                        </div>
                        <div className = "col-sm">
                            <CourseOutline />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}