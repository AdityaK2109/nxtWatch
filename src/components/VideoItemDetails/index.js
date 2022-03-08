import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {BsDot} from 'react-icons/bs'
import {FiThumbsUp, FiThumbsDown} from 'react-icons/fi'
import {CgPlayListAdd} from 'react-icons/cg'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  PageContentContainer,
  VideoItemDetailsContainer,
  VideoPlayerContainer,
  VideoName,
  ResponsiveViewsAndLikeContainer,
  ViewsContainer,
  ViewsText,
  PublishedDuration,
  LikeButtonContainer,
  ButtonTag,
  HorizontalLineTag,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelTextDetails,
  ChannelName,
  SubscriberCountText,
  ChannelDescription,
} from './styledComponents'
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    activeButton: '',
    isDisliked: false,
    isLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const videoDetails = data.video_details
      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.getVideosData()
  }

  changeIsSavedToTrue = () => {
    this.setState({isSaved: true})
  }

  changeIsSavedToFalse = () => {
    this.setState({isSaved: false})
  }

  render() {
    const {apiStatus, videoDetails} = this.state
    let {activeButton, isLiked, isDisliked, isSaved} = this.state
    console.log(apiStatus)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkThemeActive,
            addVideo,
            removeVideo,
            savedVideosList,
            likeDislikeVideoList,
            addLikedDisLikedVideos,
            removeLikedDisLikedVideos,
          } = value

          const renderSuccessView = () => {
            const isVideoAlreadySaved = savedVideosList.find(
              eachVideo => eachVideo.id === videoDetails.id,
            )
            console.log(isVideoAlreadySaved)

            if (isVideoAlreadySaved) {
              console.log('aaaaaaaaaa')
              console.log(isVideoAlreadySaved)
              isLiked = isVideoAlreadySaved.isLiked
              isDisliked = isVideoAlreadySaved.isDisliked
              activeButton = isVideoAlreadySaved.activeButton
              isSaved = true
            }

            if (likeDislikeVideoList.length !== 0) {
              const isVideoLikeDislike = likeDislikeVideoList.filter(
                eachObject => {
                  if (eachObject.id === videoDetails.id) {
                    isLiked = eachObject.isLiked
                    isDisliked = eachObject.isDisliked
                    activeButton = eachObject.activeButton
                    return eachObject
                  }

                  return eachObject
                },
              )
              console.log(isVideoLikeDislike)
            }

            const {
              id,
              title,
              videoUrl,
              channel,
              viewCount,
              publishedAt,
              description,
            } = videoDetails

            const onClickLikeButton = () => {
              if (isLiked === false) {
                addLikedDisLikedVideos({
                  id,
                  isLiked: true,
                  isDisliked: false,
                  activeButton: 'LIKE',
                })
                this.setState({
                  isLiked: true,
                  isDisliked: false,
                  activeButton: 'LIKE',
                })
              } else {
                removeLikedDisLikedVideos(id)
                this.setState({isLiked: false, activeButton: ''})
              }
            }

            const onClickDislikeButton = () => {
              if (isDisliked === false) {
                addLikedDisLikedVideos({
                  id,
                  isLiked: false,
                  isDisliked: true,
                  activeButton: 'DISLIKE',
                })
                this.setState({
                  isDisliked: true,
                  isLiked: false,
                  activeButton: 'DISLIKE',
                })
              } else {
                removeLikedDisLikedVideos(id)
                this.setState({isDisliked: false, activeButton: ''})
              }
            }

            const onClickSaveButton = () => {
              this.changeIsSavedToTrue()
              addVideo({...videoDetails, isLiked, isDisliked, activeButton})
            }

            const onClickSavedButton = () => {
              this.changeIsSavedToFalse()
              removeVideo(id)
            }

            const duration = formatDistanceToNow(new Date(publishedAt), {
              addSuffix: true,
            })
            const publishedDuration = duration.substring(
              duration.indexOf(duration.match(/\d+/g)),
            )
            return (
              <VideoItemDetailsContainer isDarkThemeActive={isDarkThemeActive}>
                <VideoPlayerContainer>
                  <ReactPlayer url={videoUrl} width="100%" height="100%" />
                </VideoPlayerContainer>
                <VideoName isDarkThemeActive={isDarkThemeActive}>
                  {title}
                </VideoName>
                <ResponsiveViewsAndLikeContainer>
                  <ViewsContainer isDarkThemeActive={isDarkThemeActive}>
                    <ViewsText>{viewCount} views</ViewsText>
                    <BsDot
                      size={22}
                      color={isDarkThemeActive ? '#64738b' : '#94a3b8'}
                    />
                    <PublishedDuration>{publishedDuration}</PublishedDuration>
                  </ViewsContainer>
                  <LikeButtonContainer>
                    <ButtonTag
                      isDarkThemeActive={isDarkThemeActive}
                      onClick={onClickLikeButton}
                      type="button"
                      isActive={activeButton === 'LIKE'}
                      name="likeDislikeButton"
                    >
                      <FiThumbsUp size={18} style={{marginRight: '5px'}} />
                      Like
                    </ButtonTag>
                    <ButtonTag
                      isDarkThemeActive={isDarkThemeActive}
                      onClick={onClickDislikeButton}
                      type="button"
                      isActive={activeButton === 'DISLIKE'}
                      name="likeDislikeButton"
                    >
                      <FiThumbsDown size={18} style={{marginRight: '6px'}} />
                      Dislike
                    </ButtonTag>
                    {isSaved ? (
                      <ButtonTag
                        onClick={onClickSavedButton}
                        type="button"
                        isDarkThemeActive={isDarkThemeActive}
                        isActive={isSaved}
                      >
                        <CgPlayListAdd size={22} style={{marginRight: '5px'}} />
                        Saved
                      </ButtonTag>
                    ) : (
                      <ButtonTag
                        isDarkThemeActive={isDarkThemeActive}
                        onClick={onClickSaveButton}
                        type="button"
                      >
                        <CgPlayListAdd size={22} style={{marginRight: '5px'}} />
                        Save
                      </ButtonTag>
                    )}
                  </LikeButtonContainer>
                </ResponsiveViewsAndLikeContainer>
                <HorizontalLineTag isDarkThemeActive={isDarkThemeActive} />
                <ChannelDetailsContainer>
                  <ChannelLogo
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <ChannelTextDetails>
                    <ChannelName isDarkThemeActive={isDarkThemeActive}>
                      {channel.name}
                    </ChannelName>
                    <SubscriberCountText isDarkThemeActive={isDarkThemeActive}>
                      {channel.subscriberCount} subscribers
                    </SubscriberCountText>
                  </ChannelTextDetails>
                </ChannelDetailsContainer>
                <ChannelDescription isDarkThemeActive={isDarkThemeActive}>
                  {description}
                </ChannelDescription>
              </VideoItemDetailsContainer>
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
                  data-testid="videoItemDetails"
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

export default VideoItemDetails
