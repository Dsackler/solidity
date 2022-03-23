import Image from "next/image"

export default function Hero({title, image, description}) {
    return (
        <div className="pt-3 pb-10">
            <div className="row row align-items-center">
                <div className="col-lg-5 offset-lg-1 order-lg-1">
                    <Image 
                        className="object-cover"
                        src={image} 
                        layout = "fixed"
                        width = "450"
                        height = "550"
                        alt={title}
                    />
                </div>
                <div className="col-lg-6">
                    <h1 className="mt-3 text-6xl font-bold">{title}</h1>
                    <p className="lead text-secondary my-5">{description}</p>
                    <div className = "row">
                        <div className = "col-sm-3">
                            <a href="#" className="btn btn-primary btn-lg border shadow-md">Get Started</a>
                        </div>
                        <div className = "col-sm-3">
                            <a href="#" className="btn btn-secondary btn-lg border shadow-md">Order now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}