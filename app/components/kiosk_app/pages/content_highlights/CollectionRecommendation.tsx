import './CollectionRecommendation.css'
import BookCard from '../good_reads/book/BookCard'
import MyTabbedSlider from './components/MyTabbedSlider'
import dummyData from './dummyData.json'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import QR_code from './images/sample_QR_code.png'
import { ReactElement } from 'react'

const imageMap: { [key: string]: string } = {
  img1: img1,
  img2: img2,
  img3: img3,
  img4: img4,
  img5: img5,
  img6: img6,
  QR_code: QR_code,
}

interface Prop {
  year: string
  month: string
}

//reference for the data structure in dummy data

interface Book {
  title: string
  author: string
  publisher: string
  ISBN: string
  PublicationDate: string
  description: string
  image: string
  qrcode: string
  author_description: string
  source?: string
  tempDetails: ReactElement
}

interface Theme {
  name: string
  image: string
  bookList: Book[]
}

interface ThemeMonthList {
  [key: string]: Theme
}

interface ThemeYearList {
  [key: string]: ThemeMonthList
}

const CollectionRecommendation = ({ year, month }: Prop) => {
  const ThemeName = dummyData[year][month].name
  const ThemeBanner = dummyData[year][month].image
  const RecommendedBooks = dummyData[year][month].bookList

  const BookList: Book[] = RecommendedBooks.map((book: Book) => ({
    ...book,
    image: imageMap[book.image],
    qrcode: imageMap[book.qrcode],
    tempDetails: (
      <div className="details">
        Author: {book.author} <br />
        Publisher: {book.publisher} <br />
        ISBN: {book.ISBN} <br />
        Publication date: {book.PublicationDate} <br />
        <br />
        {book.source ? (
          <>
            Source: {book.source} <br />
          </>
        ) : (
          <></>
        )}
      </div>
    ),
  }))
  return (
    <div className="CollectionRecommendation">
      <span>
        year: {year} <br /> month: {month}
      </span>
      {BookList.map((item, index) => (
        <div className="collection-recommendation-book">
          <BookCard
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            publisher={item.publisher}
            ISBN={item.ISBN}
            PublicationDate={item.PublicationDate}
            description={item.description}
            qrcode={item.qrcode}
          ></BookCard>
          <div className="container">
            <MyTabbedSlider
              description={item.description}
              details={item.tempDetails}
              author_description={item.author_description}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CollectionRecommendation
