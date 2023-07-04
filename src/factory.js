import web3 from './web3';
import Constitution from '../build/contracts/ConstitutionCreator.json';

const ConstitutionAddress = '0x645361dED0Edc673113c4aA98dEDC1e02675ba16';

const instance = new web3.eth.Contract(Constitution.abi, ConstitutionAddress);

export default instance;