import { faBook, faRoute, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import './FeatureList.css'
import { Button } from '@/app/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'

interface feature {
  icon: ReactElement
  content: string
}

const FeatureList = () => {
  const feature_array: feature[] = [
    { icon: <FontAwesomeIcon icon={faRoute} />, content: 'Direction Enquiry' },
    { icon: <FontAwesomeIcon icon={faThumbsUp} />, content: 'Good Reads' },
    { icon: <FontAwesomeIcon icon={faStar} />, content: 'Content Highlights' },
    { icon: <FontAwesomeIcon icon={faBook} />, content: 'Highlighted Programme' },
  ]

  return (
    <div className="FeatureList">
      <div className="grid grid-cols-4 gap-4">
        {feature_array.map((item, index) => (
          <Button variant="default" key={index}>
            <div className="icon">{item.icon}</div>
            <span>{item.content}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default FeatureList
