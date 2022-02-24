import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkThemeActive: '',
  changeTheme: () => {},
  savedVideosList: [],
  addVideo: () => {},
  removeVideo: () => {},
  isSaved: false,
})

export default NxtWatchContext
