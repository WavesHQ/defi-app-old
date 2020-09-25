import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import randomBinary from 'random-binary';
import bitcoin from 'bitcoinjs-lib';

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
