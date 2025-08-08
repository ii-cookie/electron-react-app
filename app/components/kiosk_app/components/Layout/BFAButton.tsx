import { faWheelchair } from '@fortawesome/free-solid-svg-icons'

import CircleButton from './CircleButton'

const BFAButtonClick = () => {
  document.body.classList.toggle('BFA')
}

const BFAButton = () => {
  return (
    <div className="BFAButton fixed bottom-25/100 right-0 p-[5px]" onClick={BFAButtonClick}>
      <CircleButton icon={faWheelchair} name="BFA" url=""></CircleButton>
    </div>
  )
}

export default BFAButton
