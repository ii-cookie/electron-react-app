import './PosterSlider.css'
import Slider from 'react-slick'

const PosterSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{/*insert a list of posters here*/}</Slider>
}

export default PosterSlider
