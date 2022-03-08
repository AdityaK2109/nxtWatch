import styled from 'styled-components/macro'

export const NotFoundPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: ${props =>
    props.isDarkThemeActive ? '#181818' : '#f9f9f9'};
`
export const NotFoundImg = styled.img`
  width: 65%;
  max-width: 450px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 75%;
  }
  @media (max-width: 380px) {
    width: 85%;
  }
`
export const NotFoundHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.isDarkThemeActive ? '#f1f1f1' : '#000000')};
  @media (max-width: 380px) {
    font-size: 20px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
  }
`
export const NotFoundDescription = styled.p`
  font-size: 17px;
  font-weight: normal;
  font-family: 'Roboto';
  color: #64748b;
  margin-top: 0px;
  @media (max-width: 420px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`
