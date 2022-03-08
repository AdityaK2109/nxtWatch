import styled from 'styled-components/macro'

export const PageContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.isDarkThemeActive ? '#0f0f0f' : '#f9f9f9'};
`

export const TrendingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
export const TrendingHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 26px;
  @media (min-width: 1000px) {
    padding-left: 50px;
  }
  background-color: ${props =>
    props.isDarkThemeActive ? '#191919' : '#f1f1f1'};
  @media (max-width: 317px) {
    padding: 18px;
  }
`
export const TrendingLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${props =>
    props.isDarkThemeActive ? '#000000' : '#e2e8f0'};
  @media (max-width: 450px) {
    width: 70px;
    height: 70px;
    border-radius: 35px;
  }
`
export const TrendingHeadingText = styled.h1`
  font-size: 29px;
  font-family: 'Roboto';
  margin-left: 18px;
  color: ${props => (props.isDarkThemeActive ? '#ffffff' : '#000000')};
  @media (max-width: 450px) {
    font-size: 24px;
  }
`
export const TrendingVideosContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  padding: 0px;
  @media (min-width: 576px) {
    padding: 20px;
  }
  @media (min-width: 1000px) {
    padding: 35px;
  }
`
export const EachVideoContainer = styled.li`
  display: flex;
  margin-bottom: 25px;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`
export const ThumbnailImgTag = styled.img`
  width: 100%;
  @media (min-width: 576px) {
    width: 55%;
    max-width: 370px;
  }
`
export const VideoName = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 5px;
  color: ${props => (props.isDarkThemeActive ? '#ffffff' : '#212121')};
  @media (max-width: 345px) {
    font-size: 14px;
  }
  @media (min-width: 1000px) {
    font-size: 17px;
  }
`
export const ChannelNameAndViewsContainer = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
`
export const ChannelName = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #64748b;
  margin-top: 5px;
  @media (max-width: 575px) {
    margin: 0px;
    font-size: 13px;
  }
  @media (min-width: 1270px) {
    font-size: 16px;
  }
`
