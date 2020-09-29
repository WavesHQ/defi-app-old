import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { I18n } from 'react-redux-i18n';
import { NavLink, Redirect } from 'react-router-dom';
import classnames from 'classnames';
import { MdArrowBack } from 'react-icons/md';
import { Row, Col, Button, Card } from 'reactstrap';
import { checkElementsInArray } from '../../../../../utils/utility';

import { WALLET_BASE_PATH } from '../../../../../constants';

import styles from '../CreateWallet.module.scss';
import { createWalletRequest } from '../../../reducer';
import { connect } from 'react-redux';
import WalletLoadingFooter from '../../../../../components/WalletLoadingFooter';

interface VerifyMnemonic {
  mnemonicObj: any;
  finalMixObj: any;
  mnemonicCode: string;
  isWalletTabActive: boolean;
  isWalletCreating: boolean;
  history: any;
  setIsWalletTabActive: (isWalletTabActive: boolean) => void;
  createWallet: (mnemonicCode: string, history: any) => void;
}

const VerifyMnemonic: React.FunctionComponent<VerifyMnemonic> = (
  props: VerifyMnemonic
) => {
  const [selectedWords, setSelectedWords] = useState<any>([]);
  const [mnemonicCheck, setMnemonicCheck] = useState(false);

  const {
    finalMixObj,
    isWalletTabActive,
    setIsWalletTabActive,
    mnemonicObj,
    history,
    isWalletCreating,
    mnemonicCode,
    createWallet,
  } = props;

  const handleSelect = (Obj) => {
    const tempArray = [...selectedWords, Obj];
    setSelectedWords(tempArray);
    const check = checkElementsInArray(tempArray, mnemonicObj);
    setMnemonicCheck(check);
  };

  const handleUnselect = (Obj) => {
    const filteredArray = selectedWords.filter((word) => Obj.key !== word.key);
    setSelectedWords(filteredArray);
  };

  return (
    <>
      <Helmet>
        <title>{I18n.t('containers.wallet.verifyMnemonicPage.title')}</title>
      </Helmet>
      <header className='header-bar'>
        <Button
          to={WALLET_BASE_PATH}
          tag={NavLink}
          color='link'
          className='header-bar-back'
        >
          <MdArrowBack />
          <span className='d-lg-inline'>
            {I18n.t('containers.wallet.verifyMnemonicPage.back')}
          </span>
        </Button>
        <h1 className={classnames({ 'd-none': false })}>
          {I18n.t('containers.wallet.verifyMnemonicPage.verifyMnemonicSeed')}
        </h1>
      </header>
      <div className='content'>
        <section>
          <p>
            {I18n.t(
              'containers.wallet.verifyMnemonicPage.verifyMnemonicGuideline'
            )}
          </p>
          <Row className='mb-3'>
            {Object.keys(finalMixObj).map((key) => (
              <div className='d-flex justify-content-between align-items-center'>
                <Card
                  className='p-3 text-center mx-5 my-3'
                  color={
                    selectedWords.some((obj) => obj.key === key)
                      ? 'primary'
                      : ''
                  }
                  onClick={() => {
                    if (selectedWords.some((obj) => obj.key === key)) {
                      handleUnselect({
                        key,
                        value: finalMixObj[key],
                      });
                    } else if (selectedWords.length < 6) {
                      handleSelect({
                        key,
                        value: finalMixObj[key],
                      });
                    }
                  }}
                >
                  <span
                    className={
                      selectedWords.some((obj) => obj.key === key)
                        ? styles.txtWhite
                        : styles.txtPrimary
                    }
                  >
                    {finalMixObj[key]}
                  </span>
                </Card>
              </div>
            ))}
          </Row>
          <div className='text-center'>
            <Button
              color='link'
              size='sm'
              onClick={() => {
                setIsWalletTabActive(!isWalletTabActive);
              }}
            >
              <MdArrowBack />
              <span className='d-md-inline'>
                {I18n.t('containers.wallet.verifyMnemonicPage.showAgain')}
              </span>
            </Button>
          </div>
        </section>
      </div>
      <footer className='footer-bar'>
        {isWalletCreating ? (
          <WalletLoadingFooter message={'Creating your wallet'} />
        ) : (
          <div>
            <Row className='justify-content-between align-items-center'>
              <Col className='d-flex justify-content-end'>
                <Button
                  color='link'
                  className='mr-3'
                  disabled={!(selectedWords.length === 6) || !mnemonicCheck}
                  onClick={() => {
                    createWallet(mnemonicCode, history);
                  }}
                >
                  {I18n.t('containers.wallet.createNewWalletPage.continue')}
                </Button>
              </Col>
            </Row>
          </div>
        )}
      </footer>
    </>
  );
};

const mapStateToProps = (state) => {
  const { wallet } = state;
  const { isWalletCreating } = wallet;
  return {
    isWalletCreating,
  };
};

const mapDispatchToProps = {
  createWallet: (mnemonicCode, history) => createWalletRequest({ mnemonicCode, history }),
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyMnemonic);
