import styled from 'styled-components/macro'

export const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 12px;
  margin-bottom: 20px;
  width: 24%;
  @media (max-width: 1491px) {
    width: 31%;
  }
  @media (max-width: 955px) {
    width: 44%;
  }
  @media (max-width: 545px) {
    width: 98%;
  }
`
export const ThumbnailImgTag = styled.img`
  width: 100%;
  margin-bottom: 10px;
`
export const ChannelLogoAndVideoDetailsContainer = styled.div`
  display: flex;
`
export const ChannelLogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`
export const VideoDetailsContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`
export const VideoNameHeading = styled.h1`
  margin-top: 0px;
  font-size: 15px;
  font-weight: normal;
  font-family: 'Roboto';
  color: ${props => (props.isDarkThemeActive ? '#f1f1f1' : '#212121')};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`
export const ChannelName = styled.p`
  font-size: 15px;
  font-weight: 'normal';
  font-family: 'Roboto';
  color: #64748b;
  margin-bottom: 0px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`
export const ViewsAndPublishedTextContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ViewsText = styled.p`
  font-size: 14px;
  font-weight: 'normal';
  font-family: 'Roboto';
  color: #64748b;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`
export const PublishedDuration = styled.p`
  font-size: 14px;
  font-weight: 'normal';
  font-family: 'Roboto';
  color: #64748b;
  @media (max-width: 600px) {
    font-size: 13px;
  }
`
