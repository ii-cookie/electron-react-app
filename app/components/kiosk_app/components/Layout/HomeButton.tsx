import { faHouse } from '@fortawesome/free-solid-svg-icons'

import CircleButton from './CircleButton'

const HomeButton = () => {
  return (
    <div className="HomeButton fixed bottom-20/100 right-0 p-[5px]">
      <CircleButton icon={faHouse} name="" url="/"></CircleButton>
    </div>
  )
}

export default HomeButton
