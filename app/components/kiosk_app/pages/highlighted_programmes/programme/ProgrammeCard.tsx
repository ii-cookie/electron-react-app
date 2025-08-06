import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './ProgrammeCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Programme {
  title: string
  date: string
  location: string
  image: string
}

const ProgrammeCard = ({ title, date, location, image }: Programme) => {
  return (
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
  )
}

export default ProgrammeCard
