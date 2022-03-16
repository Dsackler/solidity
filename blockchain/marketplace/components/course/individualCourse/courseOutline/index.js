

export default function CourseOutline({courseInfo}) {
    return (
        <div>
            <div className="card shadow-md rounded-2xl" style={{maxWidth: "740px", maxHeight: "200px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                            className="img-fluid rounded-start"
                            style={{height: "195px"}} 
                            src= {courseInfo.coverImage}
                            alt= {courseInfo.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <a href="#" className="card-link font-semibold text-lg text-primary">{courseInfo.type}</a>
                            <h5 className="font-semibold pb-1">{courseInfo.title}</h5>
                            <p className="card-text text-muted font-semibold">{courseInfo.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}