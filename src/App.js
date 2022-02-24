import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import VideoItemDetails from './components/VideoItemDetails'
import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
class App extends Component {
  state = {
    isDarkThemeActive: false,
    savedVideoList: [],
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

  render() {
    const {isDarkThemeActive, savedVideoList, isSaved} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkThemeActive,
          changeTheme: this.changeTheme,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
          savedVideosList: savedVideoList,
          isSaved,
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
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
