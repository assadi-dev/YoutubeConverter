const { contextBridge, ipcRenderer } = require("electron");

// can be accessed through window.app
contextBridge.exposeInMainWorld("electron", {
  sendVideo: (message) => ipcRenderer.invoke("converter", message),
});

contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
});
