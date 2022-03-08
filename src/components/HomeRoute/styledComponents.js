import styled from 'styled-components/macro'

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const SidebarAndHomePageContainer = styled.div`
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
export const BannerAndHomePageContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${props =>
    props.isDarkThemeActive ? '#181818' : '#f9f9f9'};
`
export const LoadingViewPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  text-align: center;
`
export const HomePageContainer = styled.div`
  height: 100%;
`
export const SearchbarContainer = styled.div`
  width: 100%;
  padding-right: 13px;
  margin-top: 25px;
  margin-left: 18px;
  @media (max-width: 550px) {
    margin-left: 14px;
  }
`
export const SearchbarAndIconContainer = styled.div`
  width: 80%;
  max-width: 500px;

  background-color: transparent;
  border: 1px solid
    ${props => (props.isDarkThemeActive ? '#424242' : '#cccccc')};
  border-radius: 1px;
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.isDarkThemeActive ? '#000000' : '#f8fafc'};
  @media (max-width: 550px) {
    width: 97%;
  }
`
export const InputTag = styled.input`
  background-color: transparent;
  width: 88%;
  padding: 6px;
  padding-left: 18px;
  padding-right: 18px;
  font-size: 15px;
  font-weight: 500;
  border: 0px;
  outline: none;
  @media (max-width: 550px) {
    padding-left: 13px;
    padding-right: 13px;
  }
`
export const SearchButton = styled.button`
  padding: 5px;
  padding-left: 22px;
  padding-right: 22px;
  outline: none;
  cursor: pointer;
  border: 0px;
  border-left: 1px solid
    ${props => (props.isDarkThemeActive ? '#424242' : '#cccccc')};
  background-color: ${props =>
    props.isDarkThemeActive ? '#313131' : '#f1f1f1'};
  @media (max-width: 550px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const FailureImgTag = styled.img`
  width: 65%;
  max-width: 450px;
  margin-bottom: 30px;
  @media (max-width: 380px) {
    width: 80%;
  }
`
export const FailureHeading = styled.h1`
  font-size: 21px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isDarkThemeActive ? '#f1f5f9' : '#181818')};
  @media (max-width: 380px) {
    font-size: 17px;
  }
`
export const FailureDescription = styled.p`
  font-size: 17px;
  font-weight: normal;
  font-family: 'Roboto';
  line-height: 1.5;
  margin: 0px;
  color: ${props => (props.isDarkThemeActive ? '#64748b' : '#64748b')};
  @media (max-width: 380px) {
    font-size: 15px;
  }
`
export const RetryButton = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 16;
  font-weight: 500;
  font-family: 'Roboto';
  color: #f8fafc;
  padding: 8px;
  padding-left: 26px;
  padding-right: 26px;
  border: 0px;
  border-radius: 3px;
  background-color: #4f46e5;
  margin-top: 22px;
`
export const VideosListContainer = styled.ul`
  padding: 0px;
  margin-left: 18px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    margin-left: 14px;
  }
`
