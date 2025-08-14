import { faRotateLeft, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import CircleButton from './CircleButton'

const BFAButton: React.FC = () => {
  const [isBFA, setIsBFA] = useState(false)

  const handleBFAButtonClick = () => {
    setIsBFA((prev) => {
      const newState = !prev
      document.body.classList.toggle('BFA', newState) // Sync DOM class with state
      return newState
    })
  }

  return (
    <div className="BFAButton fixed bottom-25/100 right-0 p-[5px]" onClick={handleBFAButtonClick}>
      {isBFA ? (
        <CircleButton icon={faRotateLeft} name="" url="" />
      ) : (
        <CircleButton icon={faWheelchair} name="" url="" />
      )}
    </div>
  )
}

export default BFAButton
