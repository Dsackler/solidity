import { handler as createUseAccount } from "./handler";




export const setupHooks = (web3) => {
    return {
        useAccount: createUseAccount(web3) //this returns a function (check useAccount.js for what I mean)
    }
}