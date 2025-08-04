import { useState } from 'react'
import './LangChange.css'

// Define the Header component as a React Functional Component
const Lang_Change: React.FC = () => {
  // State to track the active language with explicit type
  const [activeLang, setActiveLang] = useState<string>('trad-cn')

  // Handler to update the active language with typed parameter
  const handleLanguageChange = (lang_name: string): void => {
    setActiveLang(lang_name)
  }

  return (
    <div className="lang-change-button">
      <ul>
        <li
          className={`lang-buttons ${activeLang === 'trad-cn' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('trad-cn')}
        >
          繁
        </li>
        <li
          className={`lang-buttons ${activeLang === 'simp-cn' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('simp-cn')}
        >
          简
        </li>
        <li
          className={`lang-buttons ${activeLang === 'en' ? 'active' : ''}`}
          onClick={() => handleLanguageChange('en')}
        >
          en
        </li>
      </ul>
    </div>
  )
}

export default Lang_Change
