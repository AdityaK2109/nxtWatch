import styled from 'styled-components/macro'

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`
export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.isDarkThemeActive ? '#0f0f0f' : '#f9f9f9'};
`
export const SidebarAndSavedVideosPageContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 65px;
  @media (max-width: 575px) {
    top: 62px;
  }
  @media (max-width: 400px) {
    top: 61px;
  }
`
export const EmptyViewContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isDarkThemeActive ? '#181818' : '#f9f9f9'};
`
export const EmptyListImg = styled.img`
  width: 65%;
  max-width: 500px;
  margin-bottom: 30px;
  @media (max-width: 380px) {
    width: 80%;
  }
`
export const EmptyListHeading = styled.h1`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isDarkThemeActive ? '#f1f1f1' : '#0f0f0f')};
  @media (max-width: 575px) {
    font-size: 19px;
  }
`
export const EmptyListDescription = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: normal;
  color: ${props => (props.isDarkThemeActive ? '#94a3b8' : '#64748b')};
  @media (max-width: 575px) {
    margin-left: 18px;
    margin-right: 18px;
  }
`
export const SavedVideosHeaderContainer = styled.div`
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
export const SavedVideosLogoContainer = styled.div`
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
export const SavedVideosHeading = styled.h1`
  font-size: 29px;
  font-family: 'Roboto';
  margin-left: 18px;
  color: ${props => (props.isDarkThemeActive ? '#ffffff' : '#000000')};
  @media (max-width: 450px) {
    font-size: 22px;
  }
`
export const SavedVideosListContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  padding: 20px;
  @media (max-width: 575px) {
    padding: 0px;
  }
`
export const EachSavedVideo = styled.li`
  display: flex;
  margin-bottom: 25px;
  @media (max-width: 575px) {
    flex-direction: column;
  }
`
export const ThumbnailImgTag = styled.img`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  @media (min-width: 576px) {
    width: 60%;
    max-width: 350px;
  }
`
export const VideoDetailsContainer = styled.div`
  margin-top: 12px;
  padding-right: 10px;
  display: flex;
  @media (max-width: 310px) {
    padding-left: 8px;
  }
`
export const ChannelLogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  @media (min-width: 576px) {
    display: none;
  }
`
export const VideoTextDetails = styled.div`
  margin-left: 13px;
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
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const VideoSpecificationText = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  margin: 0px;
  @media (min-width: 576px) {
    font-size: 14px;
  }
  @media (min-width: 1270px) {
    font-size: 15px;
  }
`
export const DotContainer = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
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
export const ViewsAndPublishedAtContainer = styled.div`
  display: flex;
  align-items: center;
  color: #64748b;
`
