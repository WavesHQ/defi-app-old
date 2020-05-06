import { ipcMain } from "electron";
import DefiProcessManager from "../services/defiprocessmanager";
import { START_DEFI_CHAIN, STOP_DEFI_CHAIN } from "../constant";

const initiateProcessManager = () => {
  ipcMain.on(START_DEFI_CHAIN, async (event: any, arg: any) => {
    const processManager = new DefiProcessManager();
    await processManager.start(arg, event);
  });

  ipcMain.on(STOP_DEFI_CHAIN, async (event: { returnValue: any }, arg: any) => {
    const processManager = new DefiProcessManager();
    event.returnValue = await processManager.stop();
  });
};

export default initiateProcessManager;
