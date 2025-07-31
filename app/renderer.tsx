import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
// import appIcon from '@/resources/build/icon.png'
// import { WindowContextProvider, menuItems } from '@/lib/window'

import App from './app'
import './styles/app.css'

interface ElectronAPI {
  setZoomFactor: (zoomFactor: number) => void
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}

function Root() {
  useEffect(() => {
    if (window.electronAPI?.setZoomFactor) {
      window.electronAPI.setZoomFactor(0.5) //setting zoom level to the same as browser inspect, so they look same
    } else {
      document.body.style.zoom = '1'
    }
  }, [])

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const container = document.getElementById('app') as HTMLElement
let root: ReactDOM.Root | undefined

// Only create root if it doesn't exist
if (!root) {
  root = ReactDOM.createRoot(container)
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  )
}
