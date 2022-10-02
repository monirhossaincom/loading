import React from 'react'
import Loading from './Loading'
import Error from './Error'
import Home from './Home'
import { useHomeContext } from '../context/HomeContext'
// const url = 'https://monir-api.herokuapp.com/api/buy-home'

const Homes = () => {
  const { products, products_loading: loading, products_error: error } = useHomeContext()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className='homes'>
      {products.map((house) => (
        <article key={house.id}>
          <Home house={house} />
        </article>
      ))}
    </div>
  )
}

export default Homes
