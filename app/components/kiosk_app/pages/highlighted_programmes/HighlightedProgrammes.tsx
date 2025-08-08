import './HighlightesProgramme.css'

import BFAButton from '../../components/Layout/BFAButton'
import HomeButton from '../../components/Layout/HomeButton'
import ProgrammeCard from './programme/ProgrammeCard'
import img1 from './images/Screenshot 2025-08-06 123736.png'
import qrcode from './images/sample_QR_code.png'

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

const HighlightedProgrammes = () => {
  const programme_list: Programme[] = [
    {
      title: 'some silly cat are doing some silly things',
      date: '07-12-2025',
      time: '09:00 - 18:00',
      location: 'Hong Kong Central Library',
      organizer: 'sillycatowner.org',
      remarks: 'really silly cat',
      enquiry: '1234 5678',
      image: img1,
      qrcode: qrcode,
    },
    {
      title: 'some smart cat',
      date: '11-09-2003',
      time: '09:00 - 18:00',
      location: 'Hong Kong Central Library',
      organizer: 'sillycatowner.org',
      remarks: 'really silly cat',
      enquiry: '1234 5678',
      image: img1,
      qrcode: qrcode,
    },
    {
      title: 'some silly cat',
      date: '07-12-2025',
      time: '09:00 - 18:00',
      location: 'Hong Kong Central Library',
      organizer: 'sillycatowner.org',
      remarks: 'really silly cat',
      enquiry: '1234 5678',
      image: img1,
      qrcode: qrcode,
    },
    {
      title: 'some silly cat',
      date: '07-12-2025',
      time: '09:00 - 18:00',
      location: 'Hong Kong Central Library',
      organizer: 'sillycatowner.org',
      remarks: 'really silly cat',
      enquiry: '1234 5678',
      image: img1,
      qrcode: qrcode,
    },
    {
      title: 'some silly cat',
      date: '07-12-2025',
      time: '09:00 - 18:00',
      location: 'Hong Kong Central Library',
      organizer: 'sillycatowner.org',
      remarks: 'really silly cat',
      enquiry: '1234 5678',
      image: img1,
      qrcode: qrcode,
    },
    {
      title: 'some silly cat',
      date: '07-12-2025',
      time: '09:00 - 18:00',
      location: 'Hong Kong Central Library',
      organizer: 'sillycatowner.org',
      remarks: 'really silly cat',
      enquiry: '1234 5678',
      image: img1,
      qrcode: qrcode,
    },
    {
      title: 'some silly cat',
      date: '07-12-2025',
      time: '09:00 - 18:00',
      location: 'Hong Kong Central Library',
      organizer: 'sillycatowner.org',
      remarks: 'really silly cat',
      enquiry: '1234 5678',
      image: img1,
      qrcode: qrcode,
    },
  ]

  return (
    <>
      <div className="HighlightedProgrammes ">
        {programme_list.map((item, index) => (
          <div className="programme-container">
            <ProgrammeCard
              key={index}
              title={item.title}
              date={item.date}
              time={item.time}
              location={item.location}
              organizer={item.organizer}
              remarks={item.remarks}
              enquiry={item.enquiry}
              image={item.image}
              qrcode={item.qrcode}
            />
          </div>
        ))}
      </div>
      <HomeButton /> <BFAButton />
    </>
  )
}

export default HighlightedProgrammes
