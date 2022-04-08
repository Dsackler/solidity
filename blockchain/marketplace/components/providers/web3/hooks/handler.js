import { useState, useEffect } from "react"


export const handler = web3 => () => { //function returns a function
    const [account, setAccount] = useState(null)

    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3.eth.getAccounts()
            setAccount(accounts[0])
        }
        if(web3) {
            getAccount()
        }
    }, [web3])

    useEffect(() => { //reloads screen when account is changed
        window.ethereum && window.ethereum.on("accountsChanged", (accounts) => setAccount(accounts[0]) ?? null)
    })

    return { account }
}