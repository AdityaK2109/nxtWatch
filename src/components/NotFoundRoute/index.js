import {
  NotFoundPageContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import {
  PageContainer,
  SidebarAndHomePageContainer,
} from '../HomeRoute/styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'

const NotFoundRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkThemeActive} = value
      const imgUrl = isDarkThemeActive
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <PageContainer>
          <Header />
          <SidebarAndHomePageContainer>
            <Sidebar />
            <NotFoundPageContainer isDarkThemeActive={isDarkThemeActive}>
              <NotFoundImg src={imgUrl} alt="not found" />
              <NotFoundHeading isDarkThemeActive={isDarkThemeActive}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription isDarkThemeActive={isDarkThemeActive}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundPageContainer>
          </SidebarAndHomePageContainer>
        </PageContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFoundRoute
