import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
    "0x06b4177b7dc6feacfbfa03b62ba81dbb42f6d4d21f5917a194d1deb13f764afb": true //this is the address in Keccak-256
}


export const handler = web3 => () => { //function returns a function
    // const [account, setAccount] = useState(null)
    const { data, mutate, ...rest } = useSWR(() => 
        web3 ? "web3/accounts" : null,
        async () => { //callback function
            const accounts = await web3.eth.getAccounts()
            return accounts[0] //account.data would return this
        }
    )

    // useEffect(() => {
    //     const getAccount = async () => {
    //         const accounts = await web3.eth.getAccounts()
    //         setAccount(accounts[0])
    //     }
    //     if(web3) {
    //         getAccount()
    //     }
    // }, [web3])

    useEffect(() => { //reloads screen when account is changed
        window.ethereum && window.ethereum.on("accountsChanged", (accounts) => mutate(accounts[0]) ?? null) //we use mutate because the account is changing
    })

    return { 
        account: {
            data, //address
            isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false, //basically, data is the address. So if adminAddresses[data] = true, then it is the admin
            mutate,
            ...rest
       }
    }
}