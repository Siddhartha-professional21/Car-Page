import React from 'react'
import './hero.css'
import playBtn from '../../assets/playBtn.png'
import pauseBtn from '../../assets/pauseBtn.png'

const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="explore">
        <button className="explore-button">Explore the features</button>
      </div>

      <div className="hero-dots-container">
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
        </ul>
      </div>

      <div className="hero-dot-play">
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pauseBtn : playBtn} alt="btn" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero