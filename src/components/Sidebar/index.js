import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  SidebarContainer,
  LinksContainer,
  EachLink,
  ContactContainer,
  ContactUsHeading,
  IconsContainer,
  IconsImgTag,
  ContactsDescription,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const Sidebar = props => {
  console.log(props)
  const {match} = props
  const {path} = match
  let activeSidebarOption = ''
  switch (path) {
    case '/':
      activeSidebarOption = 'Home'
      break
    case '/trending':
      activeSidebarOption = 'Trending'
      break
    case '/gaming':
      activeSidebarOption = 'Gaming'
      break
    case '/saved-videos':
      activeSidebarOption = 'Saved Videos'
      break
    default:
      activeSidebarOption = ''
      break
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkThemeActive} = value

        return (
          <SidebarContainer isDarkThemeActive={isDarkThemeActive}>
            <LinksContainer>
              <EachLink
                key="home"
                isDarkThemeActive={isDarkThemeActive}
                isActive={activeSidebarOption === 'Home'}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    color: `${isDarkThemeActive ? '#f1f1f1' : '#0f0f0f'}`,
                  }}
                >
                  <AiFillHome
                    size={22}
                    style={{marginRight: '15px', marginBottom: '4px'}}
                    color={
                      activeSidebarOption === 'Home'
                        ? '#ff0b37'
                        : `${isDarkThemeActive ? '#7e858e' : '#424242'}`
                    }
                  />
                  Home
                </Link>
              </EachLink>

              <EachLink
                key="trending"
                isActive={activeSidebarOption === 'Trending'}
                isDarkThemeActive={isDarkThemeActive}
              >
                <Link
                  to="/trending"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    color: `${isDarkThemeActive ? '#f1f1f1' : '#0f0f0f'}`,
                  }}
                >
                  <HiFire
                    size={22}
                    style={{marginRight: '15px', marginBottom: '4px'}}
                    color={
                      activeSidebarOption === 'Trending'
                        ? '#ff0b37'
                        : `${isDarkThemeActive ? '#7e858e' : '#424242'}`
                    }
                  />
                  Trending
                </Link>
              </EachLink>

              <EachLink
                key="gaming"
                isActive={activeSidebarOption === 'Gaming'}
                isDarkThemeActive={isDarkThemeActive}
              >
                <Link
                  to="/gaming"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    color: `${isDarkThemeActive ? '#f1f1f1' : '#0f0f0f'}`,
                  }}
                >
                  <SiYoutubegaming
                    size={22}
                    style={{marginRight: '15px', marginBottom: '2px'}}
                    color={
                      activeSidebarOption === 'Gaming'
                        ? '#ff0b37'
                        : `${isDarkThemeActive ? '#7e858e' : '#424242'}`
                    }
                  />
                  Gaming
                </Link>
              </EachLink>

              <EachLink
                key="savedVideos"
                isActive={activeSidebarOption === 'Saved Videos'}
                isDarkThemeActive={isDarkThemeActive}
              >
                <Link
                  to="/saved-videos"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    color: `${isDarkThemeActive ? '#f1f1f1' : '#0f0f0f'}`,
                  }}
                >
                  <CgPlayListAdd
                    size={23}
                    style={{marginRight: '15px', marginBottom: '2px'}}
                    color={
                      activeSidebarOption === 'Saved Videos'
                        ? '#ff0b37'
                        : `${isDarkThemeActive ? '#7e858e' : '#424242'}`
                    }
                  />
                  Saved Videos
                </Link>
              </EachLink>
            </LinksContainer>
            <ContactContainer>
              <ContactUsHeading isDarkThemeActive={isDarkThemeActive}>
                CONTACT US
              </ContactUsHeading>
              <IconsContainer>
                <IconsImgTag
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconsImgTag
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconsImgTag
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsContainer>
              <ContactsDescription isDarkThemeActive={isDarkThemeActive}>
                Enjoy! Now to see your channels and recommendations!
              </ContactsDescription>
            </ContactContainer>
          </SidebarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Sidebar)
