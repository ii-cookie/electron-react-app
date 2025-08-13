import BFAButton from '../../components/Layout/BFAButton'
import HomeButton from '../../components/Layout/HomeButton'
import CollectionRecommendation from './CollectionRecommendation'
import OtherRecommendations from './OtherRecommendations'

const ContentHighlights = () => {
  return (
    <div className="ContentHighlights">
      <CollectionRecommendation year="2025" month="February" />
      <OtherRecommendations />
      <HomeButton />
      <BFAButton />
    </div>
  )
}

export default ContentHighlights
