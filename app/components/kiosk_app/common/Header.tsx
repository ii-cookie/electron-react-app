import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import LSCD_logo from './images/lcsd-leisure-and-cultural-services-department-seeklogo.png'
import HKPL_logo from './images/hkpl-hong-kong-public-library-logo.png'

// Define constants with explicit types
const weekday: string = '星期二 / Tues'
const date: string = '2025-02-13'
const time: string = '17:27'
const degree: string = '13°C'
const weather_location: string = 'weather location'

// Define the Header component as a React Functional Component
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={LSCD_logo} alt="leisure and cultural services department logo" className="LCSD_logo" />
          <div className="vl"></div>
          <img src={HKPL_logo} alt="Hong Kong Public Library logo" className="HKPL_logo" />
          <span>香港公共圖書館</span>
        </div>

        <nav>
          <ul>
            <div className="date">
              {weekday}
              <br />
              {date}
            </div>
            <div className="date-time vl"></div>
            <div className="time">{time}</div>
            <div className="time-weather vl"></div>
            <div className="weather">
              <FontAwesomeIcon icon={faCloudSun} /> {degree}
              <br />
              {weather_location}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
