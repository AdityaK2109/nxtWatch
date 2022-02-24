import styled from 'styled-components/macro'

export const NavbarContainer = styled.nav`
  background-color: ${props =>
    props.isDarkThemeActive ? '#212121' : '#ffffff'};
  padding: 15px;
  padding-left: 28px;
  padding-right: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 360px) {
    padding: 11px;
    padding-left: 16px;
    padding-right: 16px;
  }
`
export const LogoImgTag = styled.img`
  width: 130px;
  @media (max-width: 576px) {
    width: 117px;
  }
  @media (max-width: 400px) {
    width: 97px;
  }
`
export const NavItemsContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  @media (max-width: 576px) {
    height: 31px;
  }
`
export const EachNavItem = styled.li`
  margin: auto;
  margin-left: 18px;
  @media (max-width: 400px) {
    margin-left: 13px;
  }
`
export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 0px;
  padding: 0px;
`
export const ProfileImg = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 14px;
  @media (max-width: 767px) {
    display: none;
  }
`
export const HamburgerContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 0px;
  padding: 0px;
`
export const DesktopLogout = styled.div`
  background-color: transparent;
  border: 1px solid
    ${props => (props.isDarkThemeActive ? '#ffffff' : '#3b83f6')};
  border-radius: 3px;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkThemeActive ? '#f1f1f1' : '#3b83f6')};
  @media (max-width: 767px) {
    display: none;
  }
`
export const MobileLogout = styled.div`
  background-color: transparent;
  padding: 0px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  background-color: ${props =>
    props.isDarkThemeActive ? '#212121' : '#f8fafc'};
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`
export const PopupDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  width: 240px;
  margin-top: 0px;
  margin-bottom: 30px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkThemeActive ? '#f9f9f9' : '#475569')};
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid
    ${props => (props.isDarkThemeActive ? '#cbd5e1' : '#7e858e')};
  outline: none;
  cursor: pointer;
  padding: 7px;
  padding-left: 18px;
  padding-right: 18px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  border-radius: 3px;
  margin-right: 22px;
  color: ${props => (props.isDarkThemeActive ? '#cbd5e1' : '#7e858e')};
`
export const ConfirmButton = styled.button`
  border: 0px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 8px;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`
