import Popup from 'reactjs-popup'
import './BookCard.css'
import BookPopUp from './BookPopup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'

const BookCard = ({ image, title, author, publisher, ISBN, PublicationDate, description, qrcode }) => {
  const tempDetails = (
    <div className="details">
      <br />
      Author: {author} <br />
      Publisher: {publisher} <br />
      ISBN: {ISBN} <br />
      Publication date: {PublicationDate} <br />
      <br />
      {description ? (
        <>
          Description: {description} <br />
        </>
      ) : (
        <></>
      )}
    </div>
  )
  return (
    <Popup
      trigger={
        <div className="book-card">
          <div className="book-cover-container">
            <img src={image} alt={title} className="book-cover" />
          </div>

          <div className="book-details">
            <h3 className="book-title">{title}</h3>
            <p className="book-author">{author}</p>
            <button className="fake-button">E-Reading/Borrowing</button>
          </div>
        </div>
      }
      modal
      nested
    >
      <BookPopUp image={image} title={title} qrcode={qrcode} details={tempDetails} />
      <div className="close-popup-hint">
        <FontAwesomeIcon icon={faHand} /> Tap to close
        {/* <p>(closes in 10 seconds) </p> */}
        {/* not in requirement so prob not doing */}
      </div>
    </Popup>
  )
}

export default BookCard
