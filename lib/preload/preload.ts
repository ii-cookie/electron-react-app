import { contextBridge, webFrame } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import api from './api'

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('electronAPI', {
      setZoomFactor: (zoomFactor: number) => webFrame.setZoomFactor(zoomFactor),
    });
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
