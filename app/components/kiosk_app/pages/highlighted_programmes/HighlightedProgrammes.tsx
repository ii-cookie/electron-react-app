import './HighlightesProgramme.css'

import BFAButton from '../../components/BFAButton'
import HomeButton from '../../components/HomeButton'
import ProgrammeCard from './programme/ProgrammeCard'
import img1 from './images/Screenshot 2025-08-06 123736.png'
import qrcode from './images/sample_QR_code.png'

const HighlightedProgrammes = () => {
  return (
    <div className="HighlightedProgrammes ">
      <div className="programmes-container">
        <ProgrammeCard
          title="cat"
          date="07-12-2025"
          location="somewhere in the internet"
          image={img1}
          qrcode={qrcode}
        />
      </div>
      <HomeButton /> <BFAButton />
    </div>
  )
}

export default HighlightedProgrammes
