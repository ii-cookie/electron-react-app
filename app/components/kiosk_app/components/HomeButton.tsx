import { Link } from 'react-router-dom'
import { Button } from '../../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const HomeButton = () => {
  return (
    <div className="HomeButton">
      <Link to="/">
        <Button
          variant="default"
          className="rounded-full w-[100px] h-[100px] text-lg flex flex-col items-center justify-center gap-1"
        >
          <FontAwesomeIcon icon={faHouse} className="text-4xl" />
          <span>Home</span>
        </Button>
      </Link>
    </div>
  )
}

export default HomeButton
