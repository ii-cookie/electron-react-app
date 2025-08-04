import './Footer.css'

interface OpeningHours {
  day: string
  hours: string
}

const Footer: React.FC = () => {
  const openingHours: OpeningHours[] = [
    { day: 'Monday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 5:00 PM' },
    { day: 'Public Holidays', hours: '12:00 PM - 5:00 PM' },
  ]

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Library Opening Hours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {openingHours.map((item, index) => (
            <div key={index} className="flex justify-between border-b border-gray-600 pb-2">
              <span>{item.day}</span>
              <span>{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
