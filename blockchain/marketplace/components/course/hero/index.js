

export default function Hero() {
    return (
            <div className="pt-3 pb-10">
                <div className="row row align-items-center">
                    <div className="col-lg-5 offset-lg-1 order-lg-1">
                        <img src="https://www.markuptag.com/images/web-development-vector.png" class="img-fluid" alt="Web Development" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mt-3 text-6xl font-bold">Your Course Name</h1>
                        <p className="lead text-secondary my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        <div className = "row">
                            <div className = "col-sm-3">
                                <a href="#" class="btn btn-primary btn-lg border shadow-md">Get Started</a>
                            </div>
                            <div className = "col-sm-3">
                                <a href="#" class="btn btn-secondary btn-lg border shadow-md">Order now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}