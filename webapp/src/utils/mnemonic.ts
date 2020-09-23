import bip39 from 'bip39';
import * as bip32 from 'bip32';
import randomBinary from 'random-binary';
import bitcoin from 'bitcoinjs-lib';

export default class Mnemonic {
  constructor() {}

  getRandomEntropy = () => {
    return randomBinary({ bit: 64 });
  };

  createMnemonic = () => {
    const entropy = this.getRandomEntropy();
    return bip39.entropyToMnemonic(entropy);
  };

  isValidMnemonic = (mnemonic: string) => {
    return bip39.validateMnemonic(mnemonic);
  };

  createSeed = (mnemonic: string, passphrase: string = '') => {
    return bip39.mnemonicToSeedSync(mnemonic, passphrase);
  };

  getRootNode = (seed) => {
    return bip32.fromSeed(seed);
  }

  getRootPrivateKey = (rootNode) => {
    return rootNode.privateKey.toString('hex');
  }

  getRootPublicKey = (rootNode) => {
    return rootNode.publicKey.toString('hex');
  }

  getPrivateKeyInWIF = (rootNode) => {
    return rootNode.toWIF();
  }
}
