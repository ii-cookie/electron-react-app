import BookCard from '../good_reads/book/BookCard'
import './OtherRecommendations.css'
import img1 from './images/1.jpg'
import qrcode from './images/sample_QR_code.png'

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

const OtherRecommendations = () => {
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
    <div className="OtherRecommendations">
      <h1>Other Recommendations</h1>
      <div className="bookshelf grid grid-cols-3">
        {BookList.map((item, index) => (
          <div className="book-container">
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default OtherRecommendations
