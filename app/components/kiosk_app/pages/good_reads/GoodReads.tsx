import BFAButton from '../../components/Layout/BFAButton'
import HomeButton from '../../components/Layout/HomeButton'
import BookCard from './book/BookCard'

const GoodReads = () => {
  return (
    <div className="GoodReads">
      <BookCard />
      <HomeButton /> <BFAButton />
    </div>
  )
}

export default GoodReads
