import autoStart from "./ipc-events/autostart";
import uiconfig from "./ipc-events/uiconfig";
import initiateProcessManager from "./ipc-events/processmanager";

const initiateIpcEvents = () => {
  autoStart();
  uiconfig();
  initiateProcessManager();
};

initiateIpcEvents();
