import './PosterSlider.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import image4 from './4.jpg'

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

const PosterSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="PosterSlider w-3/4 m-auto ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <img src={item.image} alt={item.title} className="w-60 h-60 object-cover m-auto" />
            </div>
            <div className="p-5 bg-amber-300">
              <p className="font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </Slider>
      {/* <Slider {...settings}>
        <div></div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider> */}
    </div>
  )
}

export default PosterSlider
