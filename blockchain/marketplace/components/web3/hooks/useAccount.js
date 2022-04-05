import { useHooks } from "@components/providers/web3"


export const useAccount = () => {
    return useHooks((hooks) => hooks.useAccount)() //for every hook in hooks (which was sent here via getHooks) access the useAccount parameter (which can be found in the setupHooks.js file)
}