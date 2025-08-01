import './PosterSlider.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.png'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const data = [
  {
    image: image1,
    title: '1',
  },
  {
    image: image2,
    title: '2',
  },
  {
    image: image3,
    title: '3',
  },
  {
    image: image4,
    title: '4',
  },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '150px',
        height: '150px',
      }}
      onClick={onClick}
    >
      <IoIosArrowForward size={150} color="var(--primary)" fontWeight={1800} />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '150px',
        height: '150px',
        alignSelf: 'center',
      }}
      onClick={onClick}
    >
      <IoIosArrowBack size={150} color="var(--primary)" fontWeight={1800} />
    </div>
  )
}
const PosterSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className="PosterSlider w-3/4 m-auto ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <div className="image-container">
              <img src={item.image} alt={item.title} className="object-cover m-auto" />
            </div>
            <div className="p-5 bg-amber-300">
              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PosterSlider
