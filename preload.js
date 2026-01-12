const { contextBridge } = require('electron');
const OBSWebSocket = require('obs-websocket-js').default;

// Expose OBS WebSocket and platform info to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  OBSWebSocket: OBSWebSocket
});
