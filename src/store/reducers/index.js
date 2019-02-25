const initialState = {
  launches: [],
  launch: {},
  info: {},
  missions: [],
  mission: {},
  ships: [],
  ship: []
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
    case 'ADD_MISSIONS':
      return { ...state, missions: [...action.payload] }
      break
    case 'CHOOSE_MISSION':
      state.mission = state.missions[action.payload]
      return { ...state }
      break
    case 'ADD_SHIPS':
      return { ...state, ships: [...action.payload] }
      break
    case 'CHOOSE_SHIP':
      return { ...state, ship: state.ships[action.payload] }
    default:
      return state
  }
}
