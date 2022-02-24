import styled from 'styled-components/macro'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 280px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  cursor: pointer;
`
export const TextAndLogoContainer = styled.div`
  width: 80%;
  max-width: 300px;
`
export const WebsiteLogo = styled.img`
  width: 150px;
  margin-bottom: 14px;
  @media (max-width: 400px) {
    width: 130px;
  }
`
export const BannerDescription = styled.p`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 18px;
  color: #475569;
  @media (max-width: 400px) {
    font-size: 16px;
  }
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 8px;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 10px;
  outline: none;
`
