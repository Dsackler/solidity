import { useWeb3 } from "@components/providers"




export default function WalletDisplay({network, account}) {
    const { isWeb3Loaded } = useWeb3()
    return (
        <div className="card bg-primary shadow-md">
            <div className="card-body text-white p-4 inline">
                <h1 className = "text-2xl">Hello, {account.data}</h1>
                <h2 className = "text-2xl">{account.isAdmin ? "You are an admin" : "You are not an admin"}</h2>
                <h2 className="card-text text-x1 pb-4">Hope you are having a good day!</h2>
                <a href="#" className="btn btn-light p-2 shadow-md">Learn how to purchase</a>
            </div>
            <div className = "ml-auto mr-10 mb-2">
                {(!network.isSupported && isWeb3Loaded) &&
                <div className = "bg-red-700 rounded-lg text-white font-semibold p-3">
                    <div>Connected to wrong network</div>
                    <div>
                        Connect to: {` `}
                        <strong>{network.target}</strong>
                    </div>
                </div>
                }
            </div>
            {network.data ?
            <div className = "text-right text-white pr-5"><span>Currently on </span><strong className="text-2xl">{network.data}</strong></div>
            :
            <div className = "text-right text-white pr-5"><span>Currently </span><strong className="text-2xl">not connected</strong></div>
            }
            
        </div>
    )
}