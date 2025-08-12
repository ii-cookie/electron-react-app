import dummyData from './dummyData.json'

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
  return (
    <div>
      <span>
        year: {year} <br /> month: {month}
      </span>
    </div>
  )
}

export default CollectionRecommendation
