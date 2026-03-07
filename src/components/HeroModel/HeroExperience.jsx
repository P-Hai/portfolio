import { useState } from 'react'

const BASE_URL = import.meta.env.BASE_URL;

const HeroExperience = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseEnter = () => {
    setIsFlipped(true)
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
  }

  return (
    <div className="image-flip-container">
      <div 
        className={`image-flip-wrapper ${isFlipped ? 'flipped' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Front Image */}
        <div className="image-flip-front">
          <img src={`${BASE_URL}/images/anh1.png`} alt="Image 1" />
        </div>
        
        {/* Back Image */}
        <div className="image-flip-back">
          <img src={`${BASE_URL}/images/anh2.jpg`} alt="Image 2" />
        </div>
      </div>
    </div>
  )
}

export default HeroExperience