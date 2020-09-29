import React from 'react';
import { Helmet } from 'react-helmet';
import { I18n } from 'react-redux-i18n';
import { Col, Row } from 'reactstrap';
import { MdAccountBalanceWallet } from 'react-icons/md';
import WalletStatCard from '../../../../components/WalletStatCard';
import { WALLET_BASE_PATH } from '../../../../constants';

interface CreateOrRestoreWalletPageProps {
  history: any;
}

const CreateOrRestoreWalletPage: React.FunctionComponent<CreateOrRestoreWalletPageProps> = (
  props: CreateOrRestoreWalletPageProps
) => {
  const { history } = props;

  return (
    <div>
      <Helmet>
        <title>
          {I18n.t('containers.wallet.createOrRestoreWalletPage.title')}
        </title>
      </Helmet>
      <header className='header-bar'>
        <h1>{I18n.t('containers.wallet.createOrRestoreWalletPage.title')}</h1>
      </header>
      <div className='content'>
        <section>
          <Row>
            <Col>
              <div
                onClick={() => {
                  history.push(WALLET_BASE_PATH);
                }}
              >
                <WalletStatCard
                  label={I18n.t(
                    'containers.wallet.createOrRestoreWalletPage.createANewWallet'
                  )}
                  icon={<MdAccountBalanceWallet size={50} />}
                />
              </div>
            </Col>
            <Col>
              <div>
                <WalletStatCard
                  label={I18n.t(
                    'containers.wallet.createOrRestoreWalletPage.restoreWalletFromMnemonicSeed'
                  )}
                  icon={<MdAccountBalanceWallet size={50} />}
                />
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default CreateOrRestoreWalletPage;
