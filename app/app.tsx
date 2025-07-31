// import WelcomeKit from '@/app/components/welcome/WelcomeKit'
import Layout from './components/kiosk_app/common/Layout'
import './styles/colors.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/kiosk_app/pages/home/Home'
import DirectionEnquiry from './components/kiosk_app/pages/direction_enquiry/DirectionEnquiry'
import HighlightedProgrammes from './components/kiosk_app/pages/highlighted_programmes/HighlightedProgrammes'
import GoodReads from './components/kiosk_app/pages/good_reads/GoodReads'
import ContentHighlights from './components/kiosk_app/pages/content_highlights/ContentHighlights'

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
