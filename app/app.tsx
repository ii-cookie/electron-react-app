// import WelcomeKit from '@/app/components/welcome/WelcomeKit'
import Layout from './components/kiosk_app/common/Layout'
import './styles/colors.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/kiosk_app/pages/Home'
import DirectionEnquiry from './components/kiosk_app/pages/DirectionEnquiry'
import HighlightedProgrammes from './components/kiosk_app/pages/HighlightedProgrammes'
import GoodReads from './components/kiosk_app/pages/GoodReads'
import ContentHighlights from './components/kiosk_app/pages/ContentHighlights'

const router = createBrowserRouter([
  {
    path: '/',
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

export default function App() {
  // return <WelcomeKit />
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}
