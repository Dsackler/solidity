import courses from "./index.json"


export const getAllCourses = () => {

    return {
        data: courses,
        courseMap: courses.reduce((accumulator, course, i) => {
            accumulator[course.id] = course
            accumulator[course.id].index = i
            return accumulator
        }, {})
    }

}