import Link from "next/link"



export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand">ETH-Market</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link href="/">
                            <a className="nav-link font-semibold">Marketplace <span class="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link font-semibold">Blogs</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link font-semibold" href="#">Marketplace</a>
                        </Link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link font-semibold">Company</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link text-primary font-semibold">Connect</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}