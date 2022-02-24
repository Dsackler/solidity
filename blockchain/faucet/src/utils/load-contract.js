import contract from "@truffle/contract";

export const loadContract = async (name, provider) => {
    //first, get the contract in json format
    const res = await fetch(`/contracts/${name}.json`) //fetches the files from the contracts folder in public
    const Artifact = await res.json()

    //second, abtract the contract
    const _contract = contract(Artifact); //contract() does the abstraction

    //set the provider
    _contract.setProvider(provider);

    //third, AFTER DOING TRUFFLE MIGRATE, fetch the deployed contract
    const deployedContract = await _contract.deployed();

    return deployedContract; 
}