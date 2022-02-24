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
  

  //This loads metamask and set the provider
  useEffect(() => { //kinda like componentwillmount. This happens once when the program loads
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract("Faucet", provider);

      
      if(provider) {
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
  }, [web3Api]) //web3Api is a dependency

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
            onClick = {addFunds}
            className = "button is-primary mr-2">Donate 1 ETH</button>
          <button className = "button is-link">Withdraw</button>
        </div>
      </div>
    </>
  );
}

export default App;
