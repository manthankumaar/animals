import './AnimalShow.css'
import { useState } from 'react'
import bird from './images/bird.svg'
import cat from './images/cat.svg'
import cow from './images/cow.svg'
import dog from './images/dog.svg'
import gator from './images/gator.svg'
import horse from './images/horse.svg'
import heart from './images/heart.svg'

const svgMap = {
  bird,
  cat,
  horse,
  gator,
  cow,
  dog,
}

function AnimalShow({ type, key }) {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    setClick(click + 1)
  }
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' src={svgMap[type]} alt={key} />
      <img
        className='heart'
        src={heart}
        alt='heart'
        style={{ width: 10 + 10 * click + 'px' }}
      />
    </div>
  )
}

export default AnimalShow
