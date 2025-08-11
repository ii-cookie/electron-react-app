import BFAButton from '../../components/Layout/BFAButton'
import HomeButton from '../../components/Layout/HomeButton'
import BookCard from './book/BookCard'
import img1 from './images/61HkdyBpKOL._UF1000,1000_QL80_.jpg'
import qrcode from './images/sample_QR_code.png'

const GoodReads = () => {
  return (
    <div className="GoodReads">
      <div className="bookshelf grid grid-cols-3">
        <BookCard image={img1} title="1984" author="George Orwell" qrcode={qrcode} />
      </div>
      <HomeButton /> <BFAButton />
    </div>
  )
}

export default GoodReads
