import { ReactElement } from 'react'
import './BookPopup.css'

interface Prop {
  image: string
  title: string
  qrcode: string
  details: ReactElement
}

const BookPopUp = ({ image, title, qrcode, details }: Prop) => {
  return (
    <div className="BookPopUp bg-white">
      <div className="main-container">
        <div className="book-cover-container">
          <img src={image} alt={title} className="book-cover" />
        </div>
        <div className="info-container">
          <h2 className="title">{title}</h2>
          <img src={qrcode} alt="QR Code" className="qrcode" />
          <p className="qrcode-description">Scan to borrow</p>
        </div>
      </div>
      <p className="book-details no-scrollbar">{details}</p>
    </div>
  )
}

export default BookPopUp
