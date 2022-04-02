const { contextBridge, ipcRenderer } = require("electron");

// can be accessed through window.app
contextBridge.exposeInMainWorld("electron", {
  sendVideo: (args) => ipcRenderer.invoke("converter", args),
  downloadFile: (args) => ipcRenderer.invoke("download", args),
});

contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
});
