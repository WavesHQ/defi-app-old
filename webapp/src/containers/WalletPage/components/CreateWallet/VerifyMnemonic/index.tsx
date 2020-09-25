import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { I18n } from 'react-redux-i18n';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { MdArrowBack } from 'react-icons/md';
import { Row, Col, Button, Card } from 'reactstrap';

import { WALLET_BASE_PATH } from '../../../../../constants';

import styles from '../CreateWallet.module.scss';

interface VerifyMnemonic {
  finalMixObj: any;
  mnemonicCode: string;
  isWalletTabActive: boolean;
  setIsWalletTabActive: (isWalletTabActive: boolean) => void;
}

const VerifyMnemonic: React.FunctionComponent<VerifyMnemonic> = (
  props: VerifyMnemonic
) => {
  const [selectedWords, setSelectedWords] = useState<any>([]);

  const handleSelect = (key: string) => {
    setSelectedWords([...selectedWords, key]);
  };

  const handleUnselect = (key: string) => {
    const filteredArray = selectedWords.filter((word) => key !== word);
    setSelectedWords(filteredArray);
  };

  const { finalMixObj, isWalletTabActive, setIsWalletTabActive } = props;

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
                  color={selectedWords.includes(key) ? 'primary' : ''}
                  onClick={() => {
                    if (selectedWords.includes(key)) {
                      handleUnselect(key);
                    } else if (selectedWords.length < 6) {
                      handleSelect(key);
                    }
                  }}
                >
                  <span
                    className={
                      selectedWords.includes(key)
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
        <div>
          <Row className='justify-content-between align-items-center'>
            <Col className='d-flex justify-content-end'>
              <Button
                color='link'
                className='mr-3'
                disabled={!(selectedWords.length === 6)}
              >
                {I18n.t('containers.wallet.createNewWalletPage.continue')}
              </Button>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default VerifyMnemonic;
