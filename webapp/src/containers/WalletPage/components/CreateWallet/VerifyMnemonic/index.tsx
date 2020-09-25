import React from 'react';
import { Helmet } from 'react-helmet';
import { I18n } from 'react-redux-i18n';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { MdArrowBack } from 'react-icons/md';
import { Row, Col, Button, Card } from 'reactstrap';

import { WALLET_BASE_PATH } from '../../../../../constants';
import { getMixWords, getRandomWords } from '../../../service';

interface VerifyMnemonic {
  mnemonicObj: any;
  mnemonicCode: string;
  isWalletTabActive: boolean;
  setIsWalletTabActive: (isWalletTabActive: boolean) => void;
}

const VerifyMnemonic: React.FunctionComponent<VerifyMnemonic> = (
  props: VerifyMnemonic
) => {
  const { mnemonicObj, isWalletTabActive, setIsWalletTabActive } = props;

  const randomWordObj = getRandomWords();

  const finalMixObj = getMixWords(mnemonicObj, randomWordObj);

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
              <Col lg='2' md='4' className='mb-3'>
                <Row>
                  <Col>
                    <Card className='p-3 text-center' color='link'>
                      <span>{finalMixObj[key]}</span>
                    </Card>
                  </Col>
                </Row>
              </Col>
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
                // to={TOKENS_PATH}
                // tag={NavLink}
                color='link'
                className='mr-3'
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
