import { faHouse } from '@fortawesome/free-solid-svg-icons'

import CircleButton from './CircleButton'

const HomeButton = () => {
  return (
    <div className="HomeButton">
      <CircleButton icon={faHouse} name="Home" url="/"></CircleButton>
    </div>
  )
}

export default HomeButton
