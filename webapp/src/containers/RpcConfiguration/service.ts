import log from 'loglevel';

import { DIFF, RETRY_ATTEMPT, BLOCKCHAIN_START_ERROR } from '../../constants';
import RpcClient from '../../utils/rpc-client';
import { IResponse } from './interfaces';

//TODO: need to be done through event channel
export const isBlockchainStarted = async (): Promise<IResponse> => {
  let retryCount = 0;
  const rpcClient = new RpcClient();

  while (true && retryCount <= RETRY_ATTEMPT) {
    try {
      const isStarted = await rpcClient.isInitialBlockDownload();
      if (isStarted)
        return {
          status: isStarted,
          message: 'blockchain started successfully',
        };
      retryCount++;
    } catch (e) {
      log.error(`Got error in isBlockchainStarted: ${e}`);
      retryCount++;
      await sleep(DIFF);
    }
  }
  return { status: false, message: BLOCKCHAIN_START_ERROR };
};

const sleep = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
