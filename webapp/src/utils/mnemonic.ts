import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import randomBinary from 'random-binary';

import store from '../app/rootStore';
import { getNetwork } from './utility';

export default class Mnemonic {
  constructor() {}

  getRandomEntropy = (bits: number) => {
    return randomBinary({ bit: bits });
  };

  createMnemonic = (entropyBits: number) => {
    const entropy = this.getRandomEntropy(entropyBits);
    return bip39.entropyToMnemonic(entropy);
  };

  isValidMnemonic = (mnemonic: string) => {
    return bip39.validateMnemonic(mnemonic);
  };

  createSeed = (mnemonic: string, passphrase: string = '') => {
    const seed: Buffer = bip39.mnemonicToSeedSync(mnemonic, passphrase);
    return seed;
  };

  createRoot = (seed: Buffer) => {
    const state = store.getState();
    const blockChainInfo: any = state.wallet.blockChainInfo;
    console.log('blockchain info------', blockChainInfo);
    const network = getNetwork(blockChainInfo.chain);
    console.log('network---------', network);
    return bip32.fromSeed(seed, network);
  };

  getRootPrivateKey = (root) => {
    return root.privateKey.toString('hex');
  };

  getRootPublicKey = (root) => {
    return root.publicKey.toString('hex');
  };

  getPrivateKeyInWIF = (root) => {
    return root.toWIF();
  };
}
