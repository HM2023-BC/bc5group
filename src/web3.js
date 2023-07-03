import Web3 from 'web3';
import { global } from 'global';

let web3;

const network = "http://bops.morpheuslabs.io:24681";

if (typeof global !== 'undefined' && typeof global.web3 !== 'undefined') {
    // We are in the browser and MetaMask is running.
    web3 = new Web3(global.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running MetaMask
    const provider = new Web3.providers.HttpProvider(network);
    web3 = new Web3(provider);
}

export default web3;
