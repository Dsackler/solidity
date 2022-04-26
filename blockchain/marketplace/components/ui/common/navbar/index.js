import { useWeb3 } from "@components/providers"
import Link from "next/link"
import { useRouter } from "next/router"
import { useAccount } from "@components/hooks/web3"



export default function Navbar() {
    const { connect, isLoading, isWeb3Loaded } = useWeb3()
    // const _useAccount = useAccount(web3) //remember, useAccount(web3) returns a function.
    // const { account } = _useAccount() //this is using the function to get the account
    const { account } = useAccount()
    const router = useRouter();

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
                        <Link href="/marketplace">
                            <a className="nav-link font-semibold">Marketplace <span className="sr-only">(current)</span></a>
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
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link font-semibold">Company</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            {isLoading ?
                                <a className="btn btn-primary disabled text-primary font-semibold text-white" role = "button" aria-disabled="true">Loading...</a> 
                                :
                            isWeb3Loaded
                                ?
                                account.data
                                    ?
                                    <a className="btn btn-primary disabled text-primary font-semibold text-white" onClick = {connect} role = "button" aria-disabled="true">Hello there</a> 
                                    :
                                    <a className="btn btn-primary text-primary font-semibold text-white" onClick = {connect} role = "button">Connect</a> 
                                :
                                <a className="btn btn-primary text-primary font-semibold text-white" onClick = {() => router.push("https://metamask.io/")} role = "button">Install Metamask</a>
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}