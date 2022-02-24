import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdSearch} from 'react-icons/md'
import Header from '../Header'
import Sidebar from '../Sidebar'
import BannerSection from '../BannerSection'
import VideoCardItem from '../VideoCardItem'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  PageContainer,
  SidebarAndHomePageContainer,
  BannerAndHomePageContainer,
  LoadingViewPage,
  HomePageContainer,
  SearchbarContainer,
  SearchbarAndIconContainer,
  InputTag,
  SearchButton,
  FailureImgTag,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideosListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  emptyList: 'EMPTY LIST',
}

class HomeRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    searchInput: '',
    searchQuery: '',
    videosList: {},
  }

  componentDidMount() {
    this.getVideosList()
  }

  onClickSearchIcon = () => {
    const {searchInput} = this.state
    this.setState({searchQuery: searchInput}, this.getVideosList)
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchQuery} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      if (data.videos.length === 0) {
        console.log('empty list')
        this.setState({apiStatus: apiStatusConstants.emptyList})
      } else {
        const updatedList = data.videos.map(eachObject => ({
          id: eachObject.id,
          title: eachObject.title,
          thumbnailUrl: eachObject.thumbnail_url,
          channel: {
            name: eachObject.channel.name,
            profileImageUrl: eachObject.channel.profile_image_url,
          },
          viewCount: eachObject.view_count,
          publishedAt: eachObject.published_at,
        }))
        console.log(updatedList)
        this.setState({
          videosList: updatedList,
          apiStatus: apiStatusConstants.success,
        })
      }
    }
  }

  onClickRetryButton = () => {
    this.getVideosList()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActive} = value

          const renderSuccessView = () => {
            const {videosList} = this.state
            return (
              <VideosListContainer>
                {videosList.map(eachVideo => (
                  <VideoCardItem
                    isDarkThemeActive={isDarkThemeActive}
                    key={eachVideo.id}
                    eachVideo={eachVideo}
                  />
                ))}
              </VideosListContainer>
            )
          }

          const renderEmptyListView = () => (
            <LoadingViewPage isDarkThemeActive={isDarkThemeActive}>
              <FailureImgTag
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureHeading isDarkThemeActive={isDarkThemeActive}>
                No Search results found
              </FailureHeading>
              <FailureDescription isDarkThemeActive={isDarkThemeActive}>
                Try different key words or remove search filter
              </FailureDescription>
              <RetryButton type="button" onClick={this.onClickRetryButton}>
                Retry
              </RetryButton>
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

          const renderDifferentView = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.loading:
                return renderLoadingView()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.emptyList:
                return renderEmptyListView()
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
                <BannerAndHomePageContainer
                  isDarkThemeActive={isDarkThemeActive}
                  data-testid="home"
                >
                  {showBanner && (
                    <BannerSection closeBanner={this.closeBanner} />
                  )}
                  <HomePageContainer>
                    <SearchbarContainer>
                      <SearchbarAndIconContainer
                        isDarkThemeActive={isDarkThemeActive}
                      >
                        <InputTag
                          type="search"
                          placeholder="Search"
                          value={searchInput}
                          onChange={this.onChangeSearchInput}
                        />
                        <SearchButton
                          data-testid="searchButton"
                          type="button"
                          onClick={this.onClickSearchIcon}
                          isDarkThemeActive={isDarkThemeActive}
                        >
                          <MdSearch
                            size={19}
                            color={isDarkThemeActive ? '#909090' : '#383838'}
                          />
                        </SearchButton>
                      </SearchbarAndIconContainer>
                    </SearchbarContainer>
                    {renderDifferentView()}
                  </HomePageContainer>
                </BannerAndHomePageContainer>
              </SidebarAndHomePageContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeRoute
