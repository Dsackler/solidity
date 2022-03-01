import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import {loadContract} from "./utils/load-contract";


function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null
  });

  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState(null);
  const [shouldReload, setShouldReload] = useState(false);

  const reloadEffect = () => setShouldReload(!shouldReload); //when below useEffect is triggered, it sets to true, so it reloads. Then it sets to false after

  const setAccountListener = (provider) => { //this is executed everytime your account is changed in metamask
    provider.on("accountsChanged", (accounts) => window.location.reload()) //reloads page when changing accounts

    // provider._jsonRpcConnection.events.on("notification", (payload) => { //this deals with locking account and then logging back in
    //   const {method} = payload
    //   if (method === "metamask_unlockStateChanged") {
    //     setAccount(null)
    //   }
    // })
  }
  

  //This loads metamask and set the provider
  useEffect(() => { //kinda like componentwillmount. This happens once when the program loads
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      

      if(provider) {
        const contract = await loadContract("Faucet", provider);
        setAccountListener(provider); //this is what listens to what account you are using.
        // provider.request({method: "eth_requestAccounts"}); //asks you to login
        //because of button, we are not going to ask user to login until button is pressed
        
        setWeb3Api({
          provider: provider,
          web3: new Web3(provider),
          contract: contract
        })
      } else {
        console.error("Please install metamask");
      }
    }
    loadProvider()
  }, []);


  //this loads balance in
  useEffect(() => {
    const loadBalance = async () => {
      //const {contract, web3} = web3Api;
      const contract = web3Api.contract;
      const web3 = web3Api.web3;
      const balance = await web3.eth.getBalance(contract.address) //we are getting the balance at the address of the faucet
      setBalance(web3.utils.fromWei(balance,'ether'))
    }

    web3Api.contract && loadBalance()
  }, [web3Api, shouldReload]) //web3Api and shouldReload are dependencies. We want the function to trigger when either is changed

  //this gets your account
  useEffect(() => { //this runs when any value in the array below changes
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    }

    //only run getAccount() if web3Api.web3 exists
    web3Api.web3 && getAccount(); 

  }, [web3Api.web3]); //this runs any time a value in the array changes. It is a dependency

  const addFunds = async () => {
    const {contract, web3} = web3Api; //this is destructuring
    
    await contract.addFunds({
      from: account,
      value: web3.utils.toWei("1", "ether")
    })

    // window.location.reload(); //reloads the page
    reloadEffect(); //reloads the page
  }

  const withdraw = async () => {
    const {contract, web3} = web3Api; //this is destructuring
    const withdrawAmount = web3.utils.toWei("0.1", "ether")
    await contract.withdraw(withdrawAmount, { //withdraw takes an argument
      from: account
    })
    reloadEffect();
  }


  return (
    <>
      <div className = "faucet-wrapper">
        <div className = "faucet">
          <div className = "is-flex is-align-items-center">
            <span>
              <strong className = "mr-2">Account: </strong>
            </span>
            { account ? 
              <div>{account}</div> : 
              !web3Api.provider ?
              <>
                <div className = "notification is-warning is-size-6 is-rounded">
                  Wallet is not detected!{` `} 
                  <a target = "_blank" href = "https://docs.metamask.io">
                     Install Metamask
                  </a>
                </div>
              </> :
              <button className = "button is-small"
                onClick = {() => web3Api.provider.request("eth_requestAccounts")}
              > 
              Connect Wallet
              </button> 
            }
          </div>
          {/* mb = margin bottom */}
          <div className = "balance-view is-size-2 mb-4"> 
            Current Balance: <strong>{balance}</strong> ETH
          </div>
          <button 
            disabled = {!account}
            onClick = {addFunds}
            className = "button is-primary mr-2">Donate 1 ETH</button>
          <button 
            disabled = {!account}
            onClick = {withdraw}
            className = "button is-link">Withdraw .01 ETH</button>
        </div>
      </div>
    </>
  );
}

export default App;
