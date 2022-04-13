import { useEffect } from "react"
import useSWR from "swr"

const NETWORKS = {
    1: "Ethereum Main Network",
    3: "Ropsten Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
    56: "Binance Test Network",
    1337: "Ganache"
}

export const handler = (web3, provider) => () => {

    const { mutate, ...rest } = useSWR(() =>
        web3 ? "web3/network" : null,
        async () => {
            const chainId = await web3.eth.getChainId() //gets the network chain ID
            return NETWORKS[chainId]
        }
    )

    useEffect(() => { //this is for when the network changes
        provider &&
        provider.on("chainChanged", chainId => {
            mutate(NETWORKS[parseInt(chainId, 16)])
        })
    }, [web3])

    return {
        network: {
            mutate,
            ...rest
        }
    }
}
