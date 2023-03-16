import React from 'react';
import MediaCard from '../cards/cards'

import './home.css'


function homepage() {
  return (
    <div className='home'>
      <div className='cardss'>
        <div className='one'>
        <MediaCard  />
        </div>
        <div className='one'>
        <MediaCard />
        </div>
        <div className='one'>
        <MediaCard />
        </div>
        <div className='one'>
        <MediaCard />
        </div>
      </div>
    </div>
  )
}

export default homepage;