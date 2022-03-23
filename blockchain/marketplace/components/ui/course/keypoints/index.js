

export default function KeyPoints({keypoints}) {
    return (
        <div className = "grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5 pt-4">
            {keypoints.map(point =>
                <div className="card border-0">
                    <div className="row">
                        <div className="col-auto flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="col">
                            <div className="card-block">
                                <h4 className="card-title font-semibold">Keypoint</h4>
                                <p className="card-text text-muted font-semibold">{point}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}