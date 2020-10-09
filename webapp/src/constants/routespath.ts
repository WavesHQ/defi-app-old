export const BLOCKCHAIN_BASE_PATH = '/blockchain';
export const BLOCKCHAIN_BLOCK_BASE_PATH = `${BLOCKCHAIN_BASE_PATH}/block`;
export const BLOCKCHAIN_BLOCK_PARAM_PATH = `${BLOCKCHAIN_BLOCK_BASE_PATH}/:height`;
export const BLOCKCHAIN_MINER_BASE_PATH = `${BLOCKCHAIN_BASE_PATH}/miner`;
export const BLOCKCHAIN_MINER_PARAM_PATH = `${BLOCKCHAIN_MINER_BASE_PATH}/:id`;
export const EXCHANGE_PATH = '/exchange';
export const HELP_PATH = '/help';
export const INDEX_PATH = '/index.html';
export const MASTER_NODES_PATH = '/masternodes';
export const TOKENS_PATH = '/tokens';
export const TOKENS_INFO_PATH = `${TOKENS_PATH}/:id/:hash`;
export const MASTER_NODES_DETAIL_PATH = `${MASTER_NODES_PATH}/:hash`;
export const CREATE_MASTER_NODES_PATH = `${MASTER_NODES_PATH}/create`;
export const CREATE_TOKENS_PATH = `${TOKENS_PATH}/create`;
export const TOKEN_EDIT_PATH = `${TOKENS_PATH}/edit`;
export const EDIT_TOKENS_PATH = `${TOKEN_EDIT_PATH}/:id`;
export const DCT_DISTRIBUTION_TOKENS_PATH = `${TOKENS_PATH}/dctdistibution`;
export const SETTING_PATH = '/settings';
export const WALLET_PAGE_PATH = '/';
export const WALLET_BASE_PATH = '/wallet';
export const WALLET_SEND_PATH = `${WALLET_BASE_PATH}/send`;
export const WALLET_RECEIVE_PATH = `${WALLET_BASE_PATH}/receive`;
export const WALLET_CREATE_RECEIVE_REQUEST = `${WALLET_BASE_PATH}/receive/request`;
export const WALLET_PAYMENT_REQ_BASE_PATH = `${WALLET_BASE_PATH}/paymentrequest`;
export const WALLET_PAYMENT_REQ_PARAMS_PATH = `${WALLET_PAYMENT_REQ_BASE_PATH}/:id`;
export const WALLET_TOKENS_PATH = `${WALLET_BASE_PATH}/tokens`;
export const WALLET_ADD_TOKEN_PATH = `${WALLET_TOKENS_PATH}/addtoken`;
export const CONSOLE_RPC_CALL_BASE_PATH = `/console`;
