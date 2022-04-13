import { handler as createAccountHook } from "./handler";
import { handler as createNetworkHook } from "./useNetwork";




export const setupHooks = (web3) => {
    return {
        useAccount: createAccountHook(web3), //this returns a function (check useAccount.js for what I mean)
        useNetwork: createNetworkHook(web3)
    }
}