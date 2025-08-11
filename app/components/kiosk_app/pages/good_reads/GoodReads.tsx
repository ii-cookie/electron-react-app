import BFAButton from '../../components/Layout/BFAButton'
import HomeButton from '../../components/Layout/HomeButton'
import BookCard from './book/BookCard'
import img1 from './images/61HkdyBpKOL._UF1000,1000_QL80_.jpg'

const GoodReads = () => {
  return (
    <div className="GoodReads">
      <div className="bookshelf grid grid-cols-3">
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
        <BookCard imageSrc={img1} title="1984" author="George Orwell" />
      </div>
      <HomeButton /> <BFAButton />
    </div>
  )
}

export default GoodReads
