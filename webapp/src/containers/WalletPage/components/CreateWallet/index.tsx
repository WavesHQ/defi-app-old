import React, { useEffect, useState } from 'react';
import { getMnemonic } from '../../service';
import CreateNewWallet from './CreateNewWallet';
import VerifyMnemonic from './VerifyMnemonic';

const CreateWallet: React.FunctionComponent = () => {
  const [mnemonicObj, setMnemonicObj] = useState({});
  const [mnemonicCode, setMnemonicCode] = useState('');
  const [isWalletTabActive, setIsWalletTabActive] = useState(false);

  useEffect(() => {
    generateNewMnemonic();
  }, []);

  const generateNewMnemonic = () => {
    const { mnemonicCode, mnemonicObj } = getMnemonic();
    setMnemonicObj(mnemonicObj);
    setMnemonicCode(mnemonicCode);
  };

  return (
    <>
      {!isWalletTabActive ? (
        <CreateNewWallet
          mnemonicObj={mnemonicObj}
          generateNewMnemonic={generateNewMnemonic}
          isWalletTabActive={isWalletTabActive}
          setIsWalletTabActive={setIsWalletTabActive}
        />
      ) : (
        <VerifyMnemonic
          mnemonicObj={mnemonicObj}
          mnemonicCode={mnemonicCode}
          isWalletTabActive={isWalletTabActive}
          setIsWalletTabActive={setIsWalletTabActive}
        />
      )}
    </>
  );
};

export default CreateWallet;
