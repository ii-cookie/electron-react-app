import { faHouse, faWheelchairAlt } from '@fortawesome/free-solid-svg-icons'

import CircleButton from './CircleButton'

const BFAButton = () => {
  return (
    <div className="BFAButton absolute top-5/6 right-0 p-[5px]">
      <CircleButton icon={faWheelchairAlt} name="BFA" url="/"></CircleButton>
    </div>
  )
}

export default BFAButton
