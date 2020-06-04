import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './Login';
import { Signup } from './signup';
import { ForgotPassword } from './Forgotpassword';
import {AuthGlobalStyle} from './styleGlobal'
import styled, { keyframes } from '../../theme';
import { Logo } from '../../img/logo';

interface IAuthProps {
}

export const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return(
    <>
    <AuthGlobalStyle />
    <AuthCard>
        <LoginLogoContainer>
            <LoginLogoText><Logo width="150px" height="250px" /></LoginLogoText>
        </LoginLogoContainer>
        <AuthCardBody>
            <Switch>
                <Route path="/Auth/connexion" component={Login} exact/>  
                <Route path="/Auth/Enregistrement" component={Signup}/>
                <Route path="/Auth/Recupere-mot-de-passe" component={ForgotPassword}/>
                <Route path="/Auth/" component={Login} exact/>                
            </Switch>
        </AuthCardBody>
    </AuthCard>
    
    </>
  ) ;
};

export const animationFadeSlide = keyframes`
    0% {
    opacity: 0;
    transform: translateY(7%);
    }
    100% {
    opacity: 1;
    transform: translateY(0);
}`

export const animationFade = keyframes`
    0% {
    opacity: 0;
    transform: scale(0.85);
    }
    100% {
    opacity: 1;
    transform: scale(1);
    }
`

const AuthCard = styled.div`
    flex: 1;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    text-align: center;
    position: relative;
`

const AuthCardHeader = styled.div`

`
export const LoginLogoContainer = styled.div`
    width: 160px;
    margin: 0 auto;
    padding: 44px 0 21px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 auto;
`

export const LoginLogoText = styled.div`
    font-size : 51px;
    animation : ${animationFade} 2s ease-in-out;

    span{
        color : red;
        font-weight : bold;
    }
`
const AuthCardBody = styled.div`
    flex-wrap: nowrap;
    flex-grow: 1;
    margin-top: 44px;
    animation: ${animationFadeSlide} .4s ease-out both .5s;
    flex-direction: column;
    display: flex;
`