import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  LoginPageContainer,
  LoginCardContainer,
  LogoImg,
  LoginFormContainer,
  LabelText,
  InputTag,
  ShowPasswordContainer,
  CheckBoxTag,
  ShowPasswordText,
  LoginButton,
  ErrorMsgText,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const apiUrls = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrls, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, showErrorMsg: true})
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      errorMsg,
      showErrorMsg,
    } = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkThemeActive} = value
          const logoUrl = isDarkThemeActive
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginPageContainer isDarkThemeActive={isDarkThemeActive}>
              <LoginCardContainer isDarkThemeActive={isDarkThemeActive}>
                <LogoImg src={logoUrl} alt="website logo" />
                <LoginFormContainer onSubmit={this.onSubmitLoginForm}>
                  <LabelText
                    htmlFor="username"
                    isDarkThemeActive={isDarkThemeActive}
                  >
                    USERNAME
                  </LabelText>
                  <InputTag
                    type="text"
                    id="username"
                    onChange={this.onChangeUsername}
                    value={username}
                    placeholder="Username"
                    isDarkThemeActive={isDarkThemeActive}
                  />
                  <LabelText
                    htmlFor="password"
                    isDarkThemeActive={isDarkThemeActive}
                  >
                    PASSWORD
                  </LabelText>
                  <InputTag
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    onChange={this.onChangePassword}
                    value={password}
                    placeholder="Password"
                    isDarkThemeActive={isDarkThemeActive}
                  />
                  <ShowPasswordContainer>
                    <CheckBoxTag
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onClickShowPassword}
                      value={showPassword}
                    />
                    <ShowPasswordText
                      htmlFor="checkbox"
                      isDarkThemeActive={isDarkThemeActive}
                    >
                      Show Password
                    </ShowPasswordText>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && (
                    <ErrorMsgText isDarkThemeActive={isDarkThemeActive}>
                      *{errorMsg}
                    </ErrorMsgText>
                  )}
                </LoginFormContainer>
              </LoginCardContainer>
            </LoginPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginRoute
