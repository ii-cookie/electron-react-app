// import WelcomeKit from '@/app/components/welcome/WelcomeKit'
import Layout from './components/kiosk_app/components/Layout/Layout'
import './styles/colors.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/kiosk_app/pages/home/Home'
import DirectionEnquiry from './components/kiosk_app/pages/direction_enquiry/DirectionEnquiry'
import HighlightedProgrammes from './components/kiosk_app/pages/highlighted_programmes/HighlightedProgrammes'
import GoodReads from './components/kiosk_app/pages/good_reads/GoodReads'
import ContentHighlights from './components/kiosk_app/pages/content_highlights/ContentHighlights'
import BFAButton from './components/kiosk_app/components/Layout/BFAButton'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/DirectionEnquiry',
    element: (
      <Layout>
        <DirectionEnquiry />
      </Layout>
    ),
  },
  {
    path: '/HighlightedProgrammes',
    element: (
      <Layout>
        <HighlightedProgrammes />
      </Layout>
    ),
  },
  {
    path: '/GoodReads',
    element: (
      <Layout>
        <GoodReads />
      </Layout>
    ),
  },
  {
    path: '/ContentHighlights',
    element: (
      <Layout>
        <ContentHighlights />
      </Layout>
    ),
  },
])

export default function App() {
  // return <WelcomeKit />
  return <RouterProvider router={router} />
}
