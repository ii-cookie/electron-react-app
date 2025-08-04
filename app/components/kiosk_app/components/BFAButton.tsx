import { faWheelchairAlt } from '@fortawesome/free-solid-svg-icons'

import CircleButton from './CircleButton'

const BFAButtonClick = () => {
  document.body.classList.toggle('BFA')
}

const BFAButton = () => {
  return (
    <div className="BFAButton absolute top-[1500px] right-0 p-[5px]" onClick={BFAButtonClick}>
      <CircleButton icon={faWheelchairAlt} name="BFA" url=""></CircleButton>
    </div>
  )
}

export default BFAButton
