import React from 'react'
import ReactDOM from 'react-dom/client'
// import appIcon from '@/resources/build/icon.png'
// import { WindowContextProvider, menuItems } from '@/lib/window'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './app'
import './styles/app.css'
import Home from './components/kiosk_app/pages/Home'
import DirectionEnquiry from './components/kiosk_app/pages/DirectionEnquiry'
import HighlightedProgrammes from './components/kiosk_app/pages/HighlightedProgrammes'
import GoodReads from './components/kiosk_app/pages/GoodReads'
import ContentHighlights from './components/kiosk_app/pages/Contenthighlights'

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/DirectionEnquiry',
    element: <DirectionEnquiry />,
  },
  {
    path: '/HighlightedProgrammes',
    element: <HighlightedProgrammes />,
  },
  {
    path: '/GoodReads',
    element: <GoodReads />,
  },
  {
    path: '/ContentHighlights',
    element: <ContentHighlights />,
  },
])

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    {/* <WindowContextProvider titlebar={{ title: 'Electron React App', icon: appIcon, menuItems }}>
      <App />
    </WindowContextProvider> */}
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
)
