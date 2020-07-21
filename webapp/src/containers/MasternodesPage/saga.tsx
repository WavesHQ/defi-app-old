import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as log from '../../utils/electronLogger';
import { I18n } from 'react-redux-i18n';
import {
  fetchMasternodesRequest,
  fetchMasternodesSuccess,
  fetchMasternodesFailure,
  createMasterNode,
  createMasterNodeFailure,
  createMasterNodeSuccess,
  resignMasterNode,
  resignMasterNodeFailure,
  resignMasterNodeSuccess,
  setMasternodeOperator,
} from './reducer';
import {
  handelFetchMasterNodes,
  handelCreateMasterNodes,
  handleResignMasterNode,
  handleGetPrivateKey,
} from './service';

function* fetchMasterNodes() {
  yield call(masterNodeOperator);
  try {
    const data = yield call(handelFetchMasterNodes);
    if (data && Array.isArray(data)) {
      yield put({
        type: fetchMasternodesSuccess.type,
        payload: { masternodes: data },
      });
    } else {
      yield put({
        type: fetchMasternodesFailure.type,
        payload: 'No data found',
      });
    }
  } catch (e) {
    yield put({ type: fetchMasternodesFailure.type, payload: e.message });
    log.error(e);
  }
}

function* createMasterNodes(action) {
  try {
    const {
      payload: { masterNodeName },
    } = action;
    const data = yield call(handelCreateMasterNodes, masterNodeName);
    yield put({ type: createMasterNodeSuccess.type, payload: { ...data } });
  } catch (e) {
    yield put({ type: createMasterNodeFailure.type, payload: e.message });
    log.error(e);
  }
}

function* masterNodeResign(action) {
  try {
    const {
      payload: { masterNodeHash },
    } = action;
    const data = yield call(handleResignMasterNode, masterNodeHash);
    yield put({ type: resignMasterNodeSuccess.type, payload: data });
  } catch (e) {
    yield put({ type: resignMasterNodeFailure.type, payload: e.message });
    log.error(e);
  }
}

function* masterNodeOperator() {
  const { configurationData } = yield select((state) => state.app);
  const isMasterNode = String(configurationData)
    .split(' ')
    .find((item) => item.includes('masternode_operator='));
  const address = isMasterNode?.substring('masternode_operator='.length);
  try {
    if (address) {
      yield call(handleGetPrivateKey, address);
      yield put(setMasternodeOperator(address));
    } else {
      throw new Error(I18n.t('alerts.masterNodeOperatorAddressFailure'));
    }
  } catch (e) {
    yield put(setMasternodeOperator(''));
    log.error(e);
  }
}

function* mySaga() {
  yield takeLatest(fetchMasternodesRequest.type, fetchMasterNodes);
  yield takeLatest(createMasterNode.type, createMasterNodes);
  yield takeLatest(resignMasterNode.type, masterNodeResign);
}

export default mySaga;
