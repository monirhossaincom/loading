import React from 'react'

const Home = ({ house }) => {
  const { name, image, info, price } = house
  return (
    <div className='card'>
      <div className='card-body'>
        <img src={image} alt='' />
        <div className='pa-30 '>
          <div>
            <h2>${price}</h2>
            <h3>{name}</h3>
          </div>
          <div>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
