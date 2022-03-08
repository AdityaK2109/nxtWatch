import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {
  VideoCard,
  ThumbnailImgTag,
  ChannelLogoAndVideoDetailsContainer,
  ChannelLogoImg,
  VideoDetailsContainer,
  VideoNameHeading,
  ChannelName,
  ViewsAndPublishedTextContainer,
  ViewsText,
  PublishedDuration,
} from './styledComponents'

const VideoCardItem = props => {
  const {eachVideo, isDarkThemeActive} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = eachVideo

  const duration = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  })
  const publishedDuration = duration.substring(
    duration.indexOf(duration.match(/\d+/g)),
  )

  return (
    <VideoCard>
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <ThumbnailImgTag src={thumbnailUrl} alt="video thumbnail" />
        <ChannelLogoAndVideoDetailsContainer>
          <ChannelLogoImg src={channel.profileImageUrl} alt="channel logo" />
          <VideoDetailsContainer>
            <VideoNameHeading isDarkThemeActive={isDarkThemeActive}>
              {title}
            </VideoNameHeading>
            <ChannelName isDarkThemeActive={isDarkThemeActive}>
              {channel.name}
            </ChannelName>
            <ViewsAndPublishedTextContainer>
              <ViewsText isDarkThemeActive={isDarkThemeActive}>
                {viewCount} views
              </ViewsText>
              <BsDot size={22} color="#64748b" />
              <PublishedDuration>{publishedDuration}</PublishedDuration>
            </ViewsAndPublishedTextContainer>
          </VideoDetailsContainer>
        </ChannelLogoAndVideoDetailsContainer>
      </Link>
    </VideoCard>
  )
}

export default VideoCardItem
