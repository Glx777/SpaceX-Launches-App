export const addLaunches = launches => ({
  type: 'ADD_LAUNCHES',
  payload: launches
})

export const chooseLaunch = id => ({
  type: 'CHOOSE_LAUNCH',
  payload: id
})

export const addInfo = info => ({
  type: 'ADD_INFO',
  payload: info
})

export const addMissions = missions => ({
  type: 'ADD_MISSIONS',
  payload: missions
})

export const chooseMission = id => ({
  type: 'CHOOSE_MISSION',
  payload: id
})
