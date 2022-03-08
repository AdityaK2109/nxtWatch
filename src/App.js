import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFoundRoute from './components/NotFoundRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
class App extends Component {
  state = {
    isDarkThemeActive: false,
    savedVideoList: [],
    likeDislikeVideoList: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDarkThemeActive: !prevState.isDarkThemeActive,
    }))
  }

  removeVideo = id => {
    this.setState(props => ({
      savedVideoList: props.savedVideoList.filter(
        eachVideo => eachVideo.id !== id,
      ),
    }))
  }

  addVideo = videoDetails => {
    const {savedVideoList} = this.state
    const isVideoPresent = savedVideoList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (isVideoPresent !== false) {
      this.setState(props => ({
        savedVideoList: [...props.savedVideoList, videoDetails],
      }))
    }
  }

  addLikedDisLikedVideos = videoDetails => {
    const {likeDislikeVideoList} = this.state
    const isVideoPresent = likeDislikeVideoList.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (isVideoPresent !== false) {
      this.setState(props => ({
        likeDislikeVideoList: [...props.likeDislikeVideoList, videoDetails],
      }))
    } else {
      this.setState(
        props => ({
          likeDislikeVideoList: props.likeDislikeVideoList.map(eachVideo => {
            if (eachVideo.id === videoDetails.id) {
              return videoDetails
            }
            return eachVideo
          }),
        }),
        console.log(likeDislikeVideoList),
      )
    }
  }

  removeLikedDisLikedVideos = id => {
    this.setState(props => ({
      likeDislikeVideoList: props.likeDislikeVideoList.filter(
        eachVideo => eachVideo.id !== id,
      ),
    }))
  }

  render() {
    const {
      isDarkThemeActive,
      savedVideoList,
      isSaved,
      likeDislikeVideoList,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkThemeActive,
          changeTheme: this.changeTheme,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
          savedVideosList: savedVideoList,
          isSaved,
          likeDislikeVideoList,
          addLikedDisLikedVideos: this.addLikedDisLikedVideos,
          removeLikedDisLikedVideos: this.removeLikedDisLikedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
