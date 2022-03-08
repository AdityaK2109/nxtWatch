import styled from 'styled-components/macro'

export const GamingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.isDarkThemeActive ? '#0f0f0f' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
export const GamingHeaderContainer = styled.div`
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
export const GamingLogoContainer = styled.div`
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
export const GamingHeadingText = styled.h1`
  font-size: 29px;
  font-family: 'Roboto';
  margin-left: 18px;
  color: ${props => (props.isDarkThemeActive ? '#ffffff' : '#000000')};
  @media (max-width: 450px) {
    font-size: 24px;
  }
`
export const GamingVideoContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  padding: 18px;
  padding-right: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const EachGamingVideo = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 31%;
  margin-right: 15px;
  margin-bottom: 25px;

  @media (max-width: 890px) {
    width: 30%;
  }
  @media (min-width: 1380px) {
    width: 18%;
  }
  @media (max-width: 575px) {
    width: 40%;
  }
  @media (max-width: 318px) {
    width: 98%;
  }
`
export const GameThumbnailImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`
export const GameTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: 3px;
  color: ${props => (props.isDarkThemeActive ? '#ffffff' : '#0f0f0f')};
`
export const ViewsText = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #64748b;
  margin-left: 3px;
  margin-top: 0px;
  line-height: 1.4;
`
