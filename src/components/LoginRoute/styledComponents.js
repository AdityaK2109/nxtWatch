import styled from 'styled-components/macro'

export const LoginPageContainer = styled.div`
  background-color: ${props =>
    props.isDarkThemeActive ? '#212121' : '#f9f9f9'};
  padding: 20px;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 320px) {
    padding: 12px;
  }
`
export const LoginCardContainer = styled.div`
  background-color: ${props =>
    props.isDarkThemeActive ? '#000000' : '#ffffff'};
  padding: 30px;
  padding-top: 36px;
  padding-bottom: 36px;
  border-radius: 10px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 36px 8px #d7dfe980;
  @media (max-width: 380px) {
    padding: 23px;
    padding-top: 28px;
    padding-bottom: 28px;
  }
  @media (max-width: 300px) {
    padding: 18px;
    padding-top: 25px;
    padding-bottom: 25px;
  }
`
export const LogoImg = styled.img`
  width: 140px;
  margin-bottom: 25px;
  @media (max-width: 380px) {
    width: 110px;
    margin-bottom: 18px;
  }
  @media (max-width: 320px) {
    width: 100px;
  }
`
export const LoginFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const LabelText = styled.label`
  color: ${props => (props.isDarkThemeActive ? '#f1f5f9' : '#94a3b8')};
  font-size: 13px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 18px;
  margin-bottom: 8px;
  @media (max-width: 320px) {
    font-size: 12px;
  }
`
export const InputTag = styled.input`
  border: 1px solid
    ${props => (props.isDarkThemeActive ? '#475569' : '#cbd5e1')};
  background-color: transparent;
  border-radius: 2px;
  padding: 8px;
  padding-left: 18px;
  padding-right: 18px;
  font-size: 14px;
  font-family: 'Roboto';
  outline: none;
  color: ${props => (props.isDarkThemeActive ? '#ffffff' : '#0f0f0f')};
  @media (max-width: 320px) {
    padding: 6px;
    padding-left: 13px;
    padding-right: 13px;
  }
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 10px;
`
export const CheckBoxTag = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 7px;
`
export const ShowPasswordText = styled.label`
  font-size: 14px;
  line-height: 1.2;
  color: ${props => (props.isDarkThemeActive ? '#ffffff' : '#0f0f0f')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 7px;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  padding: 10px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  border: 0px;
  justify-self: stretch;
  @media (max-width: 320px) {
    padding: 8px;
    font-size: 14px;
  }
`
export const ErrorMsgText = styled.p`
  color: ${props => (props.isDarkThemeActive ? '#ff0b37' : '#ff0000')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 8px;
`
