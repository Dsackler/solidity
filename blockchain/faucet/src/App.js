import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3"


function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null
  })

  useEffect(() => { //kinda like componentwillmount. This happens once when the program loads
    const loadProvider = async () => {
      let provider = null;
      if (window.ethereum) { //if metamask is injected into the window
        provider = window.ethereum;

        try {
          await provider.enable(); //enables metamask
        } catch {
          console.error("User denied access to accounts");
        }

      } else if (window.web3) {
        provider = window.web3.currentProvider;
      } else if (!process.env.production) {
        provider = new Web3.providers.HttpProvider("http://localhost:7545");
      }

      setWeb3Api({
        provider: provider,
        web3: new Web3(provider)
      })
    }

    loadProvider()
  }, [])

  console.log(web3Api.web3);

  return (
    <>
      <div className = "faucet-wrapper">
        <div className = "faucet">
          <div className = "balance-view is-size-2">
            Current Balance: <strong>10</strong> ETH
          </div>
          <button className = "btn mr-2">Donate</button>
          <button className = "btn">Withdraw</button>
        </div>
      </div>
    </>
  );
}

export default App;
