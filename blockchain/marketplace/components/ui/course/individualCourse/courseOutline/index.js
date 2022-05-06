import Image from "next/image"
import Link from "next/link" 

export default function CourseOutline({courseInfo, Footer}) {
    return (
        <div>
            <div className="card shadow-md rounded-2xl" style={{maxWidth: "740px"}}>
                <div className="row g-0 h-full flex">
                    <div className="col-md-4 h-full flex">
                        <Image 
                            className="object-cover"
                            // style={{height: "195px"}} 
                            src= {courseInfo.coverImage}
                            layout = "fixed"
                            width = "200"
                            height = "230"
                            alt= {courseInfo.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <Link href={`/courses/${courseInfo.slug}`} >
                                <a className="card-link font-semibold text-lg text-primary">{courseInfo.type}</a>
                            </Link>
                            <h5 className="h-12 font-semibold pb-1">{courseInfo.title}</h5>
                            <p className="card-text text-muted font-semibold">{courseInfo.description.substring(0, 70)}...</p>
                            { Footer &&
                                /* This comes from the arguments, not a footer class */
                                <Footer/> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}