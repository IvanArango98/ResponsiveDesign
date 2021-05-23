
import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <Carditem
              src='https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-9.jpg?raw=true'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
              <Carditem
              src='https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-8.jpg?raw=true'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            </ul>

            <ul className='cards__items'>
            <Carditem
              src='https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-7.jpg?raw=true'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <Carditem
              src='https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-6.jpg?raw=true'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <Carditem
              src='https://github.com/briancodex/react-website-v1/blob/starter/public/images/img-5.jpg?raw=true'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>


            </div>
            </div>
        </div>
    )
}

export default Cards


