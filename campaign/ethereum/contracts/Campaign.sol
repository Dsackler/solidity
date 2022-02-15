// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.8.11;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender); //we need to pass in msg.sender here because otherwise the sender would be the factory which would be bad
        deployedCampaigns.push(address(newCampaign)); //we push the address of the campaign
    }

    function getDeployedCampaigns() public view returns(address[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint amount;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }

    address public manager;
    uint public minimumContribution;  
    mapping(address => bool) public approvers; //We use a map because of constant lookup. If it was array, we would have to loop which would cost gas
    uint public approversCount;
    Request[] public requests; //array of requests

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint minimum, address creator) {
        manager = creator; 
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true; //the address actually does not get stored. Just the boolean. The address just points to it
        approversCount++;
    }

    function createRequest(string memory description, uint amount, address recipient) public restricted {
        uint numRequests = requests.length;
        requests.push();

        Request storage newRequest = requests[numRequests]; //it is storage because we cannot have maps in memory
        newRequest.description = description;
        newRequest.amount = amount;
        newRequest.recipient = recipient;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
        //we do not need to initialize the map. Only need to initialize value types.
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index]; //we dont want to make a new copy in memory, we want to manipulate the copy that exists in storage

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;

    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > approversCount/2);

        payable(request.recipient).transfer(request.amount);

        request.complete = true;
    }
}

