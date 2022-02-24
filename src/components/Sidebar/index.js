import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  SidebarContainer,
  LinksContainer,
  EachLink,
  OptionName,
  ContactContainer,
  ContactUsHeading,
  IconsContainer,
  IconsImgTag,
  ContactsDescription,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const OptionsIdList = {
  home: 'Home',
  trending: 'Trending',
  gaming: 'Gaming',
  savedVideos: 'Saved Videos',
}

class Sidebar extends Component {
  state = {activeOption: OptionsIdList.home}

  onClickHomeRoute = () => {
    this.setState({activeOption: OptionsIdList.home})
  }

  onClickTrendingRoute = () => {
    this.setState({activeOption: OptionsIdList.trending})
  }

  onClickGamingRoute = () => {
    this.setState({activeOption: OptionsIdList.gaming})
  }

  onClickSavedVideosRoute = () => {
    this.setState({activeOption: OptionsIdList.savedVideos})
  }

  render() {
    const {activeOption} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActive} = value
          return (
            <SidebarContainer isDarkThemeActive={isDarkThemeActive}>
              <LinksContainer>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <EachLink
                    key="home"
                    onClick={this.onClickHomeRoute}
                    isDarkThemeActive={isDarkThemeActive}
                    isActive={activeOption === OptionsIdList.home}
                  >
                    <AiFillHome
                      size={22}
                      color={
                        activeOption === OptionsIdList.home
                          ? '#ff0b37'
                          : `${isDarkThemeActive ? '#cccccc' : '#424242'}`
                      }
                    />

                    <OptionName
                      isActive={activeOption === OptionsIdList.home}
                      isDarkThemeActive={isDarkThemeActive}
                    >
                      Home
                    </OptionName>
                  </EachLink>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <EachLink
                    key="trending"
                    onClick={this.onClickTrendingRoute}
                    isActive={activeOption === OptionsIdList.trending}
                    isDarkThemeActive={isDarkThemeActive}
                  >
                    <HiFire
                      size={22}
                      color={
                        activeOption === OptionsIdList.trending
                          ? '#ff0b37'
                          : `${isDarkThemeActive ? '#7e858e' : '#424242'}`
                      }
                    />

                    <OptionName
                      isActive={activeOption === OptionsIdList.trending}
                      isDarkThemeActive={isDarkThemeActive}
                    >
                      Trending
                    </OptionName>
                  </EachLink>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <EachLink
                    key="gaming"
                    onClick={this.onClickGamingRoute}
                    isActive={activeOption === OptionsIdList.gaming}
                    isDarkThemeActive={isDarkThemeActive}
                  >
                    <SiYoutubegaming
                      size={22}
                      color={
                        activeOption === OptionsIdList.gaming
                          ? '#ff0b37'
                          : `${isDarkThemeActive ? '#7e858e' : '#424242'}`
                      }
                    />
                    <OptionName
                      isActive={activeOption === OptionsIdList.gaming}
                      isDarkThemeActive={isDarkThemeActive}
                    >
                      Gaming
                    </OptionName>
                  </EachLink>
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <EachLink
                    key="home"
                    onClick={this.onClickSavedVideosRoute}
                    isActive={activeOption === OptionsIdList.savedVideos}
                    isDarkThemeActive={isDarkThemeActive}
                  >
                    <CgPlayListAdd
                      size={23}
                      color={
                        activeOption === OptionsIdList.savedVideos
                          ? '#ff0b37'
                          : `${isDarkThemeActive ? '#7e858e' : '#424242'}`
                      }
                    />
                    <OptionName
                      isActive={activeOption === OptionsIdList.savedVideos}
                      isDarkThemeActive={isDarkThemeActive}
                    >
                      Saved Videos
                    </OptionName>
                  </EachLink>
                </Link>
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
}

export default withRouter(Sidebar)
