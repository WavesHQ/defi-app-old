import React from 'react';
import { Helmet } from 'react-helmet';
import { I18n } from 'react-redux-i18n';
import { Row } from 'reactstrap';
import { MdAccountBalanceWallet } from 'react-icons/md';
import WalletStatCard from '../../../../components/WalletStatCard';

const CreateOrRestoreWalletPage: React.FunctionComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Create or restore wallet</title>
      </Helmet>
      <header className='header-bar'>
        <h1>{I18n.t('containers.wallet.createOrRestoreWalletPage.title')}</h1>
      </header>
      <div className='content'>
        <section>
          <Row>
            <WalletStatCard
              label={I18n.t(
                'containers.wallet.createOrRestoreWalletPage.createANewWallet'
              )}
              icon={<MdAccountBalanceWallet size={50} />}
            />

            <WalletStatCard
              label={I18n.t(
                'containers.wallet.createOrRestoreWalletPage.restoreWalletFromMnemonicSeed'
              )}
              icon={<MdAccountBalanceWallet size={50} />}
            />
          </Row>
        </section>
      </div>
    </div>
  );
};

export default CreateOrRestoreWalletPage;
