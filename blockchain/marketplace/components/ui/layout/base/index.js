import { Web3Provider } from "@components/providers";
import Footer from "@components/ui/common/footer";
import Navbar from "@components/ui/common/navbar";

 // baseLayout is a wrapper component 
export default function BaseLayout({children}) {


    return (
       //web3Provider is wrapping every component now
        <Web3Provider> 
            <div className = "container-md">
                <Navbar />
                <div className = "fit">
                    {children} {/*this is <Hero />, <Breadcrumbs />, <WalletBar />, etc*/}
                </div>
                <Footer />
            </div>
        </Web3Provider>
    )
}