


export default function WalletDisplay() {
    return (
        <div className="card bg-primary shadow-md">
            <div className="card-body text-white p-4 inline">
                <h1 className = "text-2xl">Hello, 0xd9D5cD41Fe921A743F2b5Fe71CC3070F5C176208</h1>
                <h2 className="card-text text-x1 pb-4">Hope you are having a good day!</h2>
                <a href="#" className="btn btn-light p-2 shadow-md">Learn how to purchase</a>
            </div>
            <div className = "text-right text-white pr-5"><span>Currently on </span><strong className="text-2xl">Ethereum Main Network</strong></div>
        </div>
    )
}