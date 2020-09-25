import React from 'react';
import { Helmet } from 'react-helmet';
import { I18n } from 'react-redux-i18n';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { MdArrowBack, MdRefresh } from 'react-icons/md';
import {
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from 'reactstrap';

import { WALLET_BASE_PATH } from '../../../../../constants';
import styles from '../CreateWallet.module.scss';

const dummy = {
  '1': 'crazy',
  '2': 'sting',
  '3': 'force',
  '4': 'yellow',
  '5': 'giraffe',
  '6': 'casino',
  '7': 'kingdom',
  '8': 'corn',
  '9': 'more',
  '10': 'sustain',
  '11': 'bicycle',
  '12': 'theory',
  '13': 'collect',
  '14': 'bring',
  '15': 'century',
  '16': 'attract',
  '17': 'foam',
  '18': 'remove',
  '19': 'swallow',
  '20': 'zero',
  '21': 'call',
  '22': 'piece',
  '23': 'strike',
  '24': 'domain',
};

const VerifyMnemonic: React.FunctionComponent<{}> = (props: {}) => {
  const {} = props;

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
            {Object.keys(dummy).map((key) => (
              <Col lg='2' md='4' className='mb-3'>
                <Row>
                  <Col>
                    <Card className='p-3 text-center' color='link'>
                      <span>{dummy[key]}</span>
                    </Card>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
          <div className='text-center'>
            <Button color='link' size='sm'>
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
