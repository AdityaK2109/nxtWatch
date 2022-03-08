import styled from 'styled-components/macro'

export const PageContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${props =>
    props.isDarkThemeActive ? '#0f0f0f' : '#f9f9f9'};
`
export const VideoItemDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const VideoPlayerContainer = styled.div`
  width: 100%;
  aspect-ratio: 1.78;
  max-height: 560px;
  margin-left: auto;
  margin-right: auto;
`

export const VideoName = styled.p`
  margin-top: 28px;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: normal;
  color: ${props => (props.isDarkThemeActive ? '#f9f9f9' : '#181818')};
  @media (max-width: 767px) {
    font-size: 16px;
  }
  @media (max-width: 380px) {
    font-size: 15px;
  }
`
export const ResponsiveViewsAndLikeContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.isDarkThemeActive ? '#64748b' : '#94a3b8')};
`
export const ViewsText = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
export const PublishedDuration = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
export const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonTag = styled.button`
  background-color: transparent;
  border: 0px;
  padding: 0px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 18px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
  color: ${props => props.isActive && '#2563eb'};
  @media (min-width: 768px) {
    margin-left: 18px;
    margin-right: 0px;
  }
  @media (max-width: 767px) {
    margin-bottom: 14px;
    margin-top: 7px;
  }
  @media (max-width: 380px) {
    margin-right: 13px;
    font-size: 14px;
  }
`
export const HorizontalLineTag = styled.hr`
  border: 0px;
  margin-bottom: 20px;
  border-bottom: 1px solid
    ${props => (props.isDarkThemeActive ? '#94a3b8' : '#cccccc')};
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`
export const ChannelTextDetails = styled.div`
  margin-left: 18px;
`
export const ChannelName = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: normal;
  margin-top: 0px;
  color: ${props => (props.isDarkThemeActive ? '#f8fafc' : '#181818')};
`
export const SubscriberCountText = styled.p`
  font-size: 13px;
  color: #94a3b8;
  font-weight: 500;
  font-family: 'Roboto';
  @media (max-width: 767px) {
    font-weight: normal;
  }
`
export const ChannelDescription = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkThemeActive ? '#f9f9f9' : '#64748b')};
  font-weight: normal;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    font-size: 15px;
    margin-left: 62px;
  }
`
