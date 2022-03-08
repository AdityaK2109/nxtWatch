import styled from 'styled-components/macro'

export const SidebarContainer = styled.div`
  background-color: ${props =>
    props.isDarkThemeActive ? '#212121' : '#ffffff'};
  width: 220px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 1200px) {
    width: 255px;
  }
`
export const LinksContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
`
export const EachLink = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  font-size: 15px;
  font-family: 'Roboto';
  line-height: 1.2;
  font-weight: ${props => (props.isActive ? '600' : 'normal')};
  background-color: ${props =>
    props.isActive && (props.isDarkThemeActive ? '#313131' : '#e2e8f080')};
`

export const ContactContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`
export const ContactUsHeading = styled.p`
  font-size: 17px;
  margin-top: 0px;
  margin-bottom: 23px;
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => (props.isDarkThemeActive ? '#f1f1f1' : '#475569')};
`
export const IconsContainer = styled.div`
  display: flex;
`
export const IconsImgTag = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 16px;
  margin-right: 13px;
`
export const ContactsDescription = styled.p`
  font-size: 15px;
  line-height: 1.5;
  font-weight: 'normal';
  font-family: 'Roboto';
  margin-top: 20px;
  color: ${props => (props.isDarkThemeActive ? '#f1f1f1' : '#475569')};
`
