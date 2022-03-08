import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {
  GamingPageContainer,
  GamingHeaderContainer,
  GamingLogoContainer,
  GamingHeadingText,
  GamingVideoContainer,
  EachGamingVideo,
  GameThumbnailImg,
  GameTitle,
  ViewsText,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  PageContainer,
  SidebarAndHomePageContainer,
  LoadingViewPage,
  FailureImgTag,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from '../HomeRoute/styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {PageContentContainer} from '../TrendingRoute/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideoList: {},
  }

  componentDidMount() {
    this.getGamingVideoList()
  }

  getGamingVideoList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)

      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      console.log(updatedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideoList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.getGamingVideoList()
  }

  render() {
    const {apiStatus, gamingVideoList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActive} = value

          const renderLoadingView = () => (
            <LoadingViewPage isDarkThemeActive={isDarkThemeActive}>
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#3b82f6"
                  height="50"
                  width="50"
                />
              </div>
            </LoadingViewPage>
          )

          const renderFailureView = () => {
            const imgUrl = isDarkThemeActive
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            return (
              <LoadingViewPage isDarkThemeActive={isDarkThemeActive}>
                <FailureImgTag src={imgUrl} alt="failure view" />
                <FailureHeading isDarkThemeActive={isDarkThemeActive}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailureDescription isDarkThemeActive={isDarkThemeActive}>
                  We are having some trouble to complete your request. Please
                  try again.
                </FailureDescription>
                <RetryButton type="button" onClick={this.onClickRetryButton}>
                  Retry
                </RetryButton>
              </LoadingViewPage>
            )
          }

          const renderSuccessView = () => (
            <GamingPageContainer
              data-testid="gaming"
              isDarkThemeActive={isDarkThemeActive}
            >
              <GamingHeaderContainer isDarkThemeActive={isDarkThemeActive}>
                <GamingLogoContainer isDarkThemeActive={isDarkThemeActive}>
                  <SiYoutubegaming size={30} color="#ff0b37" />
                </GamingLogoContainer>
                <GamingHeadingText isDarkThemeActive={isDarkThemeActive}>
                  Gaming
                </GamingHeadingText>
              </GamingHeaderContainer>
              <GamingVideoContainer>
                {gamingVideoList.map(eachGame => (
                  <EachGamingVideo key={eachGame.id}>
                    <Link
                      to={`/videos/${eachGame.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <GameThumbnailImg
                        src={eachGame.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GameTitle isDarkThemeActive={isDarkThemeActive}>
                        {eachGame.title}
                      </GameTitle>
                      <ViewsText isDarkThemeActive={isDarkThemeActive}>
                        {eachGame.viewCount} Watching Worldwide
                      </ViewsText>
                    </Link>
                  </EachGamingVideo>
                ))}
              </GamingVideoContainer>
            </GamingPageContainer>
          )

          const renderDifferentView = () => {
            switch (apiStatus) {
              case apiStatusConstants.loading:
                return renderLoadingView()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.success:
                return renderSuccessView()
              default:
                return null
            }
          }

          return (
            <PageContainer>
              <Header />
              <SidebarAndHomePageContainer>
                <Sidebar />
                <PageContentContainer isDarkThemeActive={isDarkThemeActive}>
                  {renderDifferentView()}
                </PageContentContainer>
              </SidebarAndHomePageContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingRoute
