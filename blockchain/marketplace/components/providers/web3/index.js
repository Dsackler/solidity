

import detectEthereumProvider from "@metamask/detect-provider";
import { createContext, useContext, useEffect, useState } from "react";
import { useMemo } from "react";
import Web3 from "web3";
import { setupHooks } from "./hooks/setupHooks";

//context is a way to pass data through the tree without having to pass props down manually at every level. Can get the data by using useWeb3 
//So we are passing the Web3Context data to all the children which is everything in baseLayout
const Web3Context = createContext(null)

export default function Web3Provider({children}) {
    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
        contract: null,
        isLoading: true
    })

    useEffect(() => { //using useEffect with no dependencies because we want this to run on the client side and for it to happen imediately 
        const loadProvider = async () => {
            const provider = await detectEthereumProvider() //this detects metamask
            if(provider) {
                const web3 = new Web3(provider)
                setWeb3Api({
                    provider,
                    web3,
                    contract: null,
                    isLoading: false
                })
            } else {
                setWeb3Api(api => ({...api, isLoading: false})) 
                console.error("Please install Metamask")
            }
        }

        loadProvider()
    }, [])

    //we are doing this so when the person clicks connect, it opens metamask
    //useMeme returns a new, memoized object. 
    //NOTICE: it takes web3Api from above, spreads it, then tacks on "isWeb3Loaded," "hooks", etc 
    const _web3Api = useMemo(() => {
        const { web3, provider } = web3Api
        return {
            ...web3Api,
            isWeb3Loaded: web3 != null,
            getHooks: () => setupHooks(web3), //getHooks calls setuphooks which returns the account
            connect: provider ?
                async () => {
                    try {
                        await provider.request({method: "eth_requestAccounts"}) //this opens metamask
                    } catch {
                        console.error("Cannot retreive account!")
                    }
                } :
                () => console.log("Cannot connect to Metamask. Try reloading your browser")
        }
    }, [web3Api]) //want it to load whenever this changes

    return (
        <Web3Context.Provider value = {_web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() { 
    //we can get the value from above by using useContext
    return useContext(Web3Context)
}

export function useHooks(callback) {
    const { getHooks } = useWeb3() //getHooks is from the object in const _web3Api
    return callback(getHooks()) //getHooks gets all of the hooks. Then it is passed into the callback function
}