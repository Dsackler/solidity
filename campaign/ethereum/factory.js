import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const address = '0xDb10724068aAa2506854471ab82dc4b1f223D4BB';
const instance = new web3.eth.Contract(CampaignFactory.abi, address);

export default instance;