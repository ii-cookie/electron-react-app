import { Link } from 'react-router-dom'
import { Button } from '../../../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface Prop {
  icon: IconDefinition
  name: string
  url: string
}

const CircleButton = ({ icon, name, url }: Prop) => {
  return (
    <div className="CircleButton">
      <Link to={url}>
        <Button
          variant="default"
          className="rounded-full w-[90px] h-[90px] text-lg flex flex-col items-center justify-center gap-1 shadow-2xl  "
        >
          <FontAwesomeIcon icon={icon} className="text-4xl" />
          <span>{name}</span>
        </Button>
      </Link>
    </div>
  )
}

export default CircleButton
