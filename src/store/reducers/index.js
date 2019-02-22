const initialState = {
  launches: [],
  launch: {},
  info: {}
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LAUNCHES':
      return { ...state, launches: [...action.payload] }
      break
    case 'ADD_INFO':
      return { ...state, info: { ...action.payload } }
      break
    case 'CHOOSE_LAUNCH':
      state.launch = state.launches[action.payload - 1]
      return { ...state }
      break
    default:
      return state
  }
}
