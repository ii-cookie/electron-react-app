import './CollectionRecommendation.css'
import BookCard from '../good_reads/book/BookCard'
import MyTabbedSlider from './components/MyTabbedSlider'
import dummyData from './dummyData.json'
import img1 from './images/1.jpg'
import qrcode from './images/sample_QR_code.png'

interface Prop {
  year: string
  month: string
}

interface Book {
  title: string
  author: string
  publisher: string
  ISBN: string
  PublicationDate: string
  description?: string
  image: string
  qrcode: string
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

  const BookList: Book[] = [
    {
      image: img1,
      title: '1984',
      author: 'George Orwell',
      publisher: 'Penguin Books Ltd',
      ISBN: '9780141036144',
      PublicationDate: '07/2008',
      description:
        'Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities.',
      qrcode: qrcode,
    },
  ]
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
            <MyTabbedSlider />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CollectionRecommendation
