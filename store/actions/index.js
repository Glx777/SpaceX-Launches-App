export const addLaunches = launches => ({
  type: 'ADD_LAUNCHES',
  payload: launches
})

export const chooseLaunch = id => ({
  type: 'CHOOSE_LAUNCH',
  payload: id
})