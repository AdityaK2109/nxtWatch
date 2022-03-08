import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkThemeActive: '',
  changeTheme: () => {},
  savedVideosList: [],
  addVideo: () => {},
  removeVideo: () => {},
  isSaved: false,
  likeDislikeVideoList: [],
  addLikedDisLikedVideos: () => {},
  removeLikedDisLikedVideos: () => {},
})

export default NxtWatchContext
