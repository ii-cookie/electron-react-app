import { faHouse } from '@fortawesome/free-solid-svg-icons'

import CircleButton from './CircleButton'

const HomeButton = () => {
  return (
    <div className="HomeButton absolute top-[1600px] right-0 p-[5px]">
      <CircleButton icon={faHouse} name="Home" url="/"></CircleButton>
    </div>
  )
}

export default HomeButton
