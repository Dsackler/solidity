import { useHooks } from "@components/providers/web3"


const enhanceHook = swrRes => {
    return {
        ...swrRes,
        hasFinishedFetch: !swrRes.data && !swrRes.error
    }
}

export const useNetwork = () => {
    const swrRes = enhanceHook(useHooks((hooks) => hooks.useNetwork)()) 
    return {
        network: swrRes
    }
}

export const useAccount = () => {
    const swrRes = enhanceHook(useHooks((hooks) => hooks.useAccount)()) //for every hook in hooks (which was sent here via getHooks) access the useAccount parameter (which can be found in the setupHooks.js file)
    return {
        account: swrRes
    }
}