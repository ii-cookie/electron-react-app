import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Don't forget to install react-slick and its types:
// npm install react-slick @types/react-slick
// Also install slick-carousel for CSS:
// npm install slick-carousel

const MyTabbedSlider: React.FC = () => {
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
        transform: 'translateY(-40px)',
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
              backgroundColor: activeSlide === index ? 'green' : 'var(--bg)',
              color: activeSlide === index ? 'white' : 'green',
              fontWeight: activeSlide === index ? '700' : '700',
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
        <div style={{ background: '#ddd', padding: '20px', textAlign: 'center' }}>Content for Label1</div>
        <div style={{ background: '#ccc', padding: '20px', textAlign: 'center' }}>Content for Label2</div>
        <div style={{ background: '#bbb', padding: '20px', textAlign: 'center' }}>Content for Label3</div>
      </Slider>
    </div>
  )
}

export default MyTabbedSlider
