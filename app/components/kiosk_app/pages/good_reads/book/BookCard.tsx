import './BookCard.css'

const BookCard = ({ imageSrc, title, author }) => {
  return (
    <div className="book-card">
      <div className="book-cover-container">
        <img src={imageSrc} alt={title} className="book-cover" />
      </div>

      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <button className="fake-button">E-Reading/Borrowing</button>
      </div>
    </div>
  )
}

export default BookCard
