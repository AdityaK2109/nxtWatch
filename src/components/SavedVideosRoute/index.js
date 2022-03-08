import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {BsDot} from 'react-icons/bs'
import {
  PageContainer,
  PageContentContainer,
  SidebarAndSavedVideosPageContainer,
  EmptyViewContainer,
  EmptyListImg,
  EmptyListHeading,
  EmptyListDescription,
  SavedVideosHeaderContainer,
  SavedVideosLogoContainer,
  SavedVideosHeading,
  SavedVideosListContainer,
  EachSavedVideo,
  ThumbnailImgTag,
  VideoDetailsContainer,
  ChannelLogoImg,
  VideoTextDetails,
  VideoName,
  ChannelNameAndViewsContainer,
  VideoSpecificationText,
  DotContainer,
  ViewsAndPublishedAtContainer,
  ChannelName,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

class SavedVideosRoute extends Component {
  render() {
    console.log(this.props)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActive, savedVideosList} = value

          const givePublishedDuration = publishedAt => {
            const duration = formatDistanceToNow(new Date(publishedAt), {
              addSuffix: true,
            })
            const publishedDuration = duration.substring(
              duration.indexOf(duration.match(/\d+/g)),
            )
            return publishedDuration
          }

          const renderEmptyList = () => (
            <EmptyViewContainer isDarkThemeActive={isDarkThemeActive}>
              <EmptyListImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <EmptyListHeading isDarkThemeActive={isDarkThemeActive}>
                No saved videos found
              </EmptyListHeading>
              <EmptyListDescription isDarkThemeActive={isDarkThemeActive}>
                You can save your videos while watching them
              </EmptyListDescription>
            </EmptyViewContainer>
          )

          const renderSavedVideosView = () => (
            <PageContentContainer isDarkThemeActive={isDarkThemeActive}>
              <SavedVideosHeaderContainer isDarkThemeActive={isDarkThemeActive}>
                <SavedVideosLogoContainer isDarkThemeActive={isDarkThemeActive}>
                  <HiFire size={28} color="#ff0b37" />
                </SavedVideosLogoContainer>
                <SavedVideosHeading isDarkThemeActive={isDarkThemeActive}>
                  Saved Videos
                </SavedVideosHeading>
              </SavedVideosHeaderContainer>
              <SavedVideosListContainer>
                {savedVideosList.map(eachVideo => (
                  <Link
                    key={eachVideo.id}
                    to={`/videos/${eachVideo.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <EachSavedVideo>
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
                            <ChannelName isDarkThemeActive={isDarkThemeActive}>
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
                                {givePublishedDuration(eachVideo.publishedAt)}
                              </VideoSpecificationText>
                            </ViewsAndPublishedAtContainer>
                          </ChannelNameAndViewsContainer>
                        </VideoTextDetails>
                      </VideoDetailsContainer>
                    </EachSavedVideo>
                  </Link>
                ))}
              </SavedVideosListContainer>
            </PageContentContainer>
          )

          return (
            <PageContainer>
              <Header />
              <SidebarAndSavedVideosPageContainer>
                <Sidebar />
                <PageContentContainer
                  data-testid="savedVideos"
                  isDarkThemeActive={isDarkThemeActive}
                >
                  {savedVideosList.length === 0
                    ? renderEmptyList()
                    : renderSavedVideosView()}
                </PageContentContainer>
              </SidebarAndSavedVideosPageContainer>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosRoute
