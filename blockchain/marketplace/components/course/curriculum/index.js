

export default function Curriculum() {

    const lectures = [
        "How to init App",
        "How to get help",
        "Intro to Solidity",
        "C++ Programming",
        "How to write For Loops",
        "Switch Statement"
    ]

    return (
        <div className = "pt-10">
            <div class="card border-0 shadow-md">
                <div class="card-header">
                    <div className = "row text-muted font-semibold">
                        <div className = "col-lg">
                            Section
                        </div>
                        <div className = "col-lg">
                            Status
                        </div>
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    {lectures.map(lec => 
                        <li class="list-group-item py-3 px-4 font-semibold">
                            <div className = "row">
                                <div className = "col-lg-6">
                                    {lec}
                                </div>
                                <div className = "col-lg">
                                    <span className="px-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Unlocked
                                    </span>
                                </div>
                                <div className = "col-lg-2">
                                    <a className = "text-primary" href = "#">Play</a>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}