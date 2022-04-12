import { useAccount } from "@components/hooks/web3/useAccount"



export default function WalletDisplay() {
    const { account } = useAccount()
    return (
        <div className="card bg-primary shadow-md">
            <div className="card-body text-white p-4 inline">
                <h1 className = "text-2xl">Hello, {account.data}</h1>
                <h2 className = "text-2xl">{account.isAdmin ? "You are an admin" : "You are not an admin"}</h2>
                <h2 className="card-text text-x1 pb-4">Hope you are having a good day!</h2>
                <a href="#" className="btn btn-light p-2 shadow-md">Learn how to purchase</a>
            </div>
            <div className = "text-right text-white pr-5"><span>Currently on </span><strong className="text-2xl">Ethereum Main Network</strong></div>
        </div>
    )
}