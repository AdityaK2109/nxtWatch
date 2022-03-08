import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {
  NavbarContainer,
  LogoImgTag,
  NavItemsContainer,
  EachNavItem,
  ThemeButton,
  ProfileImg,
  HamburgerContainer,
  LogoutButton,
  DesktopLogout,
  MobileLogout,
  PopupContainer,
  PopupDescription,
  CloseButton,
  ConfirmButton,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const Header = props => {
  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeActive, changeTheme} = value
        const onClickChangeTheme = () => {
          changeTheme()
        }
        const logoUrl = isDarkThemeActive
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavbarContainer isDarkThemeActive={isDarkThemeActive}>
            <Link to="/">
              <LogoImgTag src={logoUrl} alt="website logo" />
            </Link>
            <NavItemsContainer>
              <EachNavItem key="themeButton">
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onClickChangeTheme}
                >
                  {isDarkThemeActive ? (
                    <FiSun size={22} color="#f9f9f9" />
                  ) : (
                    <FaMoon size={22} color="#000000" />
                  )}
                </ThemeButton>
              </EachNavItem>
              <EachNavItem key="profileAndHamburger">
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HamburgerContainer>
                  <GiHamburgerMenu
                    size={24}
                    color={isDarkThemeActive ? '#f9f9f9' : '#313131'}
                  />
                </HamburgerContainer>
              </EachNavItem>
              <EachNavItem key="logoutButton">
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button">
                      <DesktopLogout isDarkThemeActive={isDarkThemeActive}>
                        Logout
                      </DesktopLogout>
                      <MobileLogout isDarkThemeActive={isDarkThemeActive}>
                        <FiLogOut
                          size={23}
                          color={isDarkThemeActive ? '#f9f9f9' : '#313131'}
                        />
                      </MobileLogout>
                    </LogoutButton>
                  }
                  overlayStyle={{backdropFilter: 'brightness(70%) blur(1px)'}}
                >
                  {close => (
                    <PopupContainer isDarkThemeActive={isDarkThemeActive}>
                      <PopupDescription isDarkThemeActive={isDarkThemeActive}>
                        Are you sure, you want to logout
                      </PopupDescription>
                      <CloseButton type="button" onClick={() => close()}>
                        Cancel
                      </CloseButton>
                      <ConfirmButton
                        type="button"
                        onClick={onClickLogoutButton}
                      >
                        Confirm
                      </ConfirmButton>
                    </PopupContainer>
                  )}
                </Popup>
              </EachNavItem>
            </NavItemsContainer>
          </NavbarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
