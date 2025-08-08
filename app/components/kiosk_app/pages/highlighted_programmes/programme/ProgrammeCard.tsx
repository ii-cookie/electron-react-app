import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import { faCalendar, faHand, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './ProgrammeCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProgrammePopUp from './ProgrammePopUp'

interface Programme {
  title: string
  date: string
  time: string
  location: string
  organizer?: string
  remarks?: string
  enquiry?: string
  image: string
  qrcode: string
}

const ProgrammeCard = ({ title, date, time, location, organizer, remarks, enquiry, image, qrcode }: Programme) => {
  const tempDetails = (
    <div className="details">
      Date: {date} <br />
      Time: {time} <br />
      Location: {location} <br />
      {organizer ? (
        <>
          Organizer: {organizer} <br />
        </>
      ) : (
        <></>
      )}
      {remarks ? (
        <>
          Remarks: {remarks} <br />
        </>
      ) : (
        <></>
      )}
      {enquiry ? (
        <>
          Enquiry: {enquiry} <br />
        </>
      ) : (
        <></>
      )}
    </div>
  )

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
      <ProgrammePopUp image={image} title={title} qrcode={qrcode} details={tempDetails} />
      <div className="close-popup-hint">
        <FontAwesomeIcon icon={faHand} /> Tap to close <p>(closes in 10 seconds)</p>
      </div>
    </Popup>
  )
}

export default ProgrammeCard
