import {IoMdClose} from 'react-icons/io'
import {
  BannerContainer,
  CloseButton,
  TextAndLogoContainer,
  WebsiteLogo,
  BannerDescription,
  GetItNowButton,
} from './styledComponents'

const BannerSection = props => {
  const {closeBanner} = props
  const onClickCloseButton = () => {
    closeBanner()
  }

  return (
    <BannerContainer data-testid="banner">
      <CloseButton
        data-testid="close"
        type="button"
        onClick={onClickCloseButton}
      >
        <IoMdClose size="24" color="#0f0f0f" />
      </CloseButton>
      <TextAndLogoContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDescription>Buy Nxt Watch Premium</BannerDescription>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </TextAndLogoContainer>
    </BannerContainer>
  )
}
export default BannerSection
