import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './ProgrammeCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProgrammePopUp from './ProgrammePopUp'

interface Programme {
  title: string
  date: string
  location: string
  image: string
  qrcode: string
}

const ProgrammeCard = ({ title, date, location, image, qrcode }: Programme) => {
  return (
    <Popup
      trigger={
        <div className="programme-card">
          <div className="programme-image-container">
            <img src={image} alt={title} className="programme-image" />
          </div>

          <div className="programme-content">
            <h2 className="programme-title">{title}</h2>
            <p className="programme-date">
              {' '}
              <FontAwesomeIcon icon={faCalendar} /> {date}
            </p>
            <div className="programme-details">
              <span className="programme-location">
                <FontAwesomeIcon icon={faLocationDot} /> {location}
              </span>
            </div>
          </div>
        </div>
      }
      modal
      nested
    >
      <ProgrammePopUp image={image} title={title} qrcode={qrcode} details="really cool cat" />
      <div className="close-popup-hint">Tap to close</div>
    </Popup>
  )
}

export default ProgrammeCard
