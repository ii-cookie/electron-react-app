import { useState, useRef, ReactElement } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Prop {
  description: string
  details: ReactElement
  author_description: string
}

const MyTabbedSlider = ({ description, details, author_description }: Prop) => {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: false, // Set to true if you want infinite looping
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: (current: number) => setActiveSlide(current),
  }

  const labels = ['Description', 'Details', 'About Author']

  const handleLabelClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index)
    }
  }

  return (
    <div
      style={{
        width: '70%',
        margin: '0 auto',
        right: '0',
        position: 'absolute',
        transform: 'translateY(-70px)',
      }}
    >
      {/* Labels/Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {labels.map((label, index) => (
          <div
            key={index}
            style={{
              width: '33%',
              borderRadius: '1em 1em 0 0',
              padding: '10px',
              cursor: 'pointer',
              fontSize: '35px',
              textAlign: 'center',
              backgroundColor: activeSlide === index ? 'green' : 'var(--bg)',
              color: activeSlide === index ? 'white' : 'green',
              fontWeight: activeSlide === index ? '600' : '550',

              //   backgroundColor: activeSlide === index ? '#f0f0f0' : 'transparent', // Optional: light background for active
            }}
            onClick={() => handleLabelClick(index)}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        <div style={{ background: '#ddd', margin: '20px', textAlign: 'center' }}>
          {' '}
          <span>{description}</span>{' '}
        </div>
        <div style={{ background: '#ccc', margin: '20px', textAlign: 'center' }}>
          {' '}
          <span>{details}</span>{' '}
        </div>
        <div style={{ background: '#bbb', margin: '20px', textAlign: 'center' }}>
          <span>{author_description}</span>
        </div>
      </Slider>
    </div>
  )
}

export default MyTabbedSlider
