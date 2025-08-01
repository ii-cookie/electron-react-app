import { faBook, faRoute, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './FeatureList.css'
import { Button } from '@/app/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface feature {
  icon: ReactElement
  content: string
  path: string
}

const FeatureList = () => {
  const feature_array: feature[] = [
    { icon: <FontAwesomeIcon icon={faRoute} />, content: 'Direction Enquiry', path: '/DirectionEnquiry' },
    { icon: <FontAwesomeIcon icon={faBook} />, content: 'Highlighted Programmes', path: 'HighlightedProgrammes' },
    { icon: <FontAwesomeIcon icon={faThumbsUp} />, content: 'Good Reads', path: '/GoodReads' },
    { icon: <FontAwesomeIcon icon={faStar} />, content: 'Content Highlights', path: '/ContentHighlights' },
  ]

  return (
    <div className="FeatureList">
      <div className="grid grid-cols-4 gap-4">
        {feature_array.map((item, index) => (
          <Link to={item.path}>
            <Button variant="default" key={index}>
              <div className="icon">{item.icon}</div>
              <span>{item.content}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeatureList
