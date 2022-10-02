import React from 'react'
import { useHomeContext } from '../context/HomeContext'
const Header = () => {
  const { products } = useHomeContext()

  return <div>Total Home ({products.length})</div>
}

export default Header
