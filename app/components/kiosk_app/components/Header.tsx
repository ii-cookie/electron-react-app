import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import LSCD_logo from './images/lcsd-leisure-and-cultural-services-department-seeklogo.png'
import HKPL_logo from './images/hkpl-hong-kong-public-library-logo.png'
import { useState, useEffect } from 'react'

// Define the Header component as a React Functional Component
const Header: React.FC = () => {
  // State to hold the current time, weekday, and date
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString('en-HK', { hour: '2-digit', minute: '2-digit', hour12: false })
  )
  const [currentWeekday, setCurrentWeekday] = useState<string>(
    new Date().toLocaleDateString('zh-HK', { weekday: 'long' }) +
      ' / ' +
      new Date().toLocaleDateString('en-US', { weekday: 'long' })
  )
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString('en-CA') // Formats as YYYY-MM-DD
  )

  // Static constants (for now, since weather data isn't provided)
  const degree: string = '13°C'
  const weather_location: string = 'weather location'

  // useEffect to update time, weekday, and date precisely at the start of each minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-HK', { hour: '2-digit', minute: '2-digit', hour12: false }))
      setCurrentWeekday(
        now.toLocaleDateString('zh-HK', { weekday: 'long' }) +
          ' / ' +
          now.toLocaleDateString('en-US', { weekday: 'long' })
      )
      setCurrentDate(now.toLocaleDateString('en-CA'))

      // Calculate milliseconds until the next minute
      const secondsUntilNextMinute = 60 - now.getSeconds()
      const msUntilNextMinute = secondsUntilNextMinute * 1000 - now.getMilliseconds()

      // Schedule the next update at the exact start of the next minute
      const timeoutId = setTimeout(() => {
        updateTime() // Recursive call to continue updates
      }, msUntilNextMinute)

      // Cleanup timeout on component unmount or before next update
      return () => clearTimeout(timeoutId)
    }

    // Start the first update
    updateTime()

    // Cleanup is handled within updateTime
  }, [])

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
              {currentWeekday}
              <br />
              {currentDate}
            </div>
            <div className="date-time vl"></div>
            <div className="time">{currentTime}</div>
            <div className="time-weather vl"></div>
            <div className="weather">
              <FontAwesomeIcon icon={faCloudSun} /> {degree}
              <br />
              <FontAwesomeIcon icon={faLocationDot} />
              {weather_location}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
