

export const handler = web3 => () => { //function returns a function
    return {
        account: web3 ? "Test Account" : "null"
    }
}