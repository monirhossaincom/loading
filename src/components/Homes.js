import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from './Loading'
import Home from './Home'

const url = 'https://monir-api.herokuapp.com/api/buy-home'

const Homes = () => {
  const [loading, setLoading] = useState()
  const [home, setHome] = useState([])

  const fetchHome = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setHome(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHome()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='homes'>
      {home.map((house) => (
        <article key={house.id}>
          <Home house={house} />
        </article>
      ))}
    </div>
  )
}

export default Homes
