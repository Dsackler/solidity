

export default function OrderCard() {
    return (


        <div className="card shadow-sm">
            <div className="card-header text-lg font-semibold p-3">
                Next JS & Typescript with Shopify Integration - Full Guide
                <h6 className="card-subtitle text-muted">0.0065 ETH</h6>
            </div>
            
            <ul className="list-group list-group-flush p-3">
                <li className="list-group-item">
                    <div className = "row">
                        <div className = "col-sm">
                            <h6 className="text-muted font-semibold">Order ID</h6>
                        </div>
                        <div className = "col-sm">
                            <h6 className="text-muted font-semibold">0x9a4e56614591da8c1ad30fe04ac672111a7f20faa92f7c484568b0213bfbf405</h6>
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className = "row">
                        <div className = "col-sm">
                            <h6 className="text-muted font-semibold">Proof</h6>
                        </div>
                        <div className = "col-sm">
                            <h6 className="text-muted font-semibold">0x95f147a2c0ced33a2d49b7ce780bc2a9cf404593c64658b336ab2eb7d9136d90</h6>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        // <div className="card">
        //     <div class="card-body">
        //         <p className = "text-lg font-semibold">Next JS & Typescript with Shopify Integration - Full Guide</p>
        //         <h6 className="card-subtitle mb-2 text-muted">0.0065 ETH</h6>
        //         <hr></hr>
        //         <div class="row pb-4 bg-slate-200">
        //             <div class="col-sm">
        //             Order ID
        //             </div>
        //             <div class="col-sm">
        //             0x9a4e56614591da8c1ad30fe04ac672111a7f20faa92f7c484568b0213bfbf405
        //             </div>
        //         </div>
        //         <div class="row">
        //             <div class="col-sm">
        //             Proof
        //             </div>
        //             <div class="col-sm">
        //             0x95f147a2c0ced33a2d49b7ce780bc2a9cf404593c64658b336ab2eb7d9136d90
        //             </div>
        //         </div>
        //         <div class="col-sm">
        //             Purchased!
        //         </div>
        //     </div>
        // </div>
    )
}