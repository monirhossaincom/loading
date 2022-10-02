import React, { createContext, useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import { GET_DATA_BEGAIN, GET_DATA_SUCCESS, GET_DATA_ERROR } from '../actions.js/homeActions'
import reducer from '../reducers/homeReducers'

const url = 'https://monir-api.herokuapp.com/api/buy-home'

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
}

const HomeContext = createContext()

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchHomeData = async (url) => {
    dispatch({ type: GET_DATA_BEGAIN })
    try {
      const response = await axios.get(url)
      const homes = response.data
      dispatch({ type: GET_DATA_SUCCESS, payload: homes })
    } catch (error) {
      dispatch({ type: GET_DATA_ERROR })
    }
  }
  useEffect(() => {
    fetchHomeData(url)
  }, [])
  return <HomeContext.Provider value={{ ...state }}> {children}</HomeContext.Provider>
}

// make sure use
export const useHomeContext = () => {
  return useContext(HomeContext)
}
