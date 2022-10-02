const homeReducers = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_DATA_BEGAIN':
      return { ...state, products_loading: true }

    case 'GET_DATA_SUCCESS':
      return { ...state, products: payload, products_loading: false }

    case 'GET_DATA_ERROR':
      return { ...state, products_loading: false, products_error: true }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default homeReducers
