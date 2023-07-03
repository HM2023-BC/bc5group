import web3 from './web3';
import HealthGuard from '../build/contracts/HealthGuard.json';

const healthGuardAddress = '0x7600AB02c697412c6d947B5756e358869Ad25815';

const instance = new web3.eth.Contract(HealthGuard.abi, healthGuardAddress);

export default instance;