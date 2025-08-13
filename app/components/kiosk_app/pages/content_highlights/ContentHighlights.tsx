import BFAButton from '../../components/Layout/BFAButton'
import HomeButton from '../../components/Layout/HomeButton'
import CollectionRecommendation from './CollectionRecommendation'

const ContentHighlights = () => {
  return (
    <div className="ContentHighlights">
      <CollectionRecommendation year="2025" month="February" />
      <HomeButton />
      <BFAButton />
    </div>
  )
}

export default ContentHighlights
