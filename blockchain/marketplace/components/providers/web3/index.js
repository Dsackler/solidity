const { createContext, useContext } = require("react");


const Web3Context = createContext(null)

export default function Web3Provider({children}) {
    return (
        <Web3Context.Provider value = {{test: "Hello"}}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() { 
    //we can get the value from above by using useContext
    return useContext(Web3Context)
}