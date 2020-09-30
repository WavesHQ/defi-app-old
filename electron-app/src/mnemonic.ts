import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import * as bitcoin from 'bitcoinjs-lib';

export default class Mnemonic {
  constructor() {}

  isValidMnemonic = (mnemonic: string) => {
    return bip39.validateMnemonic(mnemonic);
  };

  createSeed = (mnemonic: string, passphrase: string = '') => {
    const seed: Buffer = bip39.mnemonicToSeedSync(mnemonic, passphrase);
    return seed;
  };

  createRoot = (seed: Buffer) => {
    return bip32.fromSeed(seed, bitcoin.networks.testnet);
  };

  getRootPrivateKey = (root: any) => {
    return root.privateKey.toString('hex');
  };

  getRootPublicKey = (root: any) => {
    return root.publicKey.toString('hex');
  };

  getPrivateKeyInWIF = (root: any) => {
    return root.toWIF();
  };
}
