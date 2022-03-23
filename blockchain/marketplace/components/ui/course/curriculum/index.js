

export default function Curriculum({locked}) {

    const lectures = [
        "How to init App",
        "How to get help",
        "Intro to Solidity",
        "C++ Programming",
        "How to write For Loops",
        "Switch Statement"
    ]

    const statusClass = "px-2 inline-flex leading-5 font-semibold rounded-full"

    return (
        <div className = "pt-10">
            <div className="card border-0 shadow-md">
                <div className="card-header">
                    <div className = "row text-muted font-semibold">
                        <div className = "col-lg">
                            Section
                        </div>
                        <div className = "col-lg">
                            Status
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    {lectures.map(lec => 
                        <li className="list-group-item py-3 px-4 font-semibold">
                            <div className = "row">
                                <div className = "col-lg-6">
                                    {lec}
                                </div>
                                <div className = "col-lg">
                                    {/* Red if locked, green if unlocked */}
                                    <span className={ 
                                        locked ? 
                                        `bg-red-100 text-red-800 ${statusClass}` :
                                        `bg-green-100 text-green-800 ${statusClass}`
                                        }
                                    >
                                        {locked ? "Locked" : "Unlocked"} {/*if true, it will write locked, otherwise unlocked*/}
                                    </span>
                                </div>
                                <div className = "col-lg-2">
                                    <a className = "text-primary" href = "#">{locked ? "Get Access" : "Play"}</a>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}