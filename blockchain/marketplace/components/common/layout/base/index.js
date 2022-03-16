import Footer from "@components/common/footer";
import Navbar from "@components/common/navbar";


export default function BaseLayout({children}) {


    return (
        // baseLayout is a wrapper component 
        <div className = "container-md">
            <Navbar />
            <div className = "fit">
                {children} {/*this is <Hero />, <Breadcrumbs />, <WalletBar />, etc*/}
            </div>
            <Footer />
        </div>
    )
}