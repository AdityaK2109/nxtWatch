import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {HiFire} from 'react-icons/hi'
import {
  PageContentContainer,
  TrendingPageContainer,
  TrendingHeaderContainer,
  TrendingLogoContainer,
  TrendingHeadingText,
  TrendingVideosContainer,
  EachVideoContainer,
  ThumbnailImgTag,
  VideoName,
  ChannelName,
} from './styledComponents'
import {
  VideoDetailsContainer,
  VideoTextDetails,
  DotContainer,
  ChannelNameAndViewsContainer,
  VideoSpecificationText,
  ChannelLogoImg,
  ViewsAndPublishedAtContainer,
} from '../SavedVideosRoute/styledComponents'
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

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: {}}

  componentDidMount() {
    this.getTrendingVideoList()
  }

  getTrendingVideoList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(eachTrendingVideo => ({
        id: eachTrendingVideo.id,
        title: eachTrendingVideo.title,
        thumbnailUrl: eachTrendingVideo.thumbnail_url,
        channel: {
          name: eachTrendingVideo.channel.name,
          profileImageUrl: eachTrendingVideo.channel.profile_image_url,
        },
        viewCount: eachTrendingVideo.view_count,
        publishedAt: eachTrendingVideo.published_at,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.getTrendingVideoList()
  }

  render() {
    const {apiStatus, trendingVideosList} = this.state
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
            <TrendingPageContainer isDarkThemeActive={isDarkThemeActive}>
              <TrendingHeaderContainer isDarkThemeActive={isDarkThemeActive}>
                <TrendingLogoContainer isDarkThemeActive={isDarkThemeActive}>
                  <HiFire size={30} color="#ff0b37" />
                </TrendingLogoContainer>
                <TrendingHeadingText isDarkThemeActive={isDarkThemeActive}>
                  Trending
                </TrendingHeadingText>
              </TrendingHeaderContainer>
              <TrendingVideosContainer>
                {trendingVideosList.map(eachVideo => {
                  const {publishedAt} = eachVideo
                  const duration = formatDistanceToNow(new Date(publishedAt), {
                    addSuffix: true,
                  })
                  const publishedDuration = duration.substring(
                    duration.indexOf(duration.match(/\d+/g)),
                  )

                  return (
                    <Link
                      key={eachVideo.id}
                      to={`/videos/${eachVideo.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <EachVideoContainer>
                        <ThumbnailImgTag
                          src={eachVideo.thumbnailUrl}
                          alt="video thumbnail"
                        />

                        <VideoDetailsContainer>
                          <ChannelLogoImg
                            src={eachVideo.channel.profileImageUrl}
                            alt="channel logo"
                          />
                          <VideoTextDetails>
                            <VideoName isDarkThemeActive={isDarkThemeActive}>
                              {eachVideo.title}
                            </VideoName>
                            <ChannelNameAndViewsContainer>
                              <ChannelName
                                isDarkThemeActive={isDarkThemeActive}
                              >
                                {eachVideo.channel.name}
                              </ChannelName>
                              <DotContainer>
                                <BsDot size={22} color="#64748b" />
                              </DotContainer>
                              <ViewsAndPublishedAtContainer>
                                <VideoSpecificationText
                                  isDarkThemeActive={isDarkThemeActive}
                                >
                                  {eachVideo.viewCount} views
                                </VideoSpecificationText>
                                <BsDot size={22} color="#64748b" />
                                <VideoSpecificationText
                                  isDarkThemeActive={isDarkThemeActive}
                                >
                                  {publishedDuration}
                                </VideoSpecificationText>
                              </ViewsAndPublishedAtContainer>
                            </ChannelNameAndViewsContainer>
                          </VideoTextDetails>
                        </VideoDetailsContainer>
                      </EachVideoContainer>
                    </Link>
                  )
                })}
              </TrendingVideosContainer>
            </TrendingPageContainer>
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
                <PageContentContainer
                  data-testid="trending"
                  isDarkThemeActive={isDarkThemeActive}
                >
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

export default TrendingRoute
