import * as React from 'react';
import { connect } from 'react-redux';
import { AdminWrapper } from '../../components/react-wrapper/src/wrapper'
import { Input } from '../../containers/Input';
import {Button} from '../../containers/Button';
import { Link } from 'react-router-dom';
import Auth from '../../components/authentification-redux-lib/src';
import { Dispatch } from 'redux';


interface ISignupProps {
  dispatch : Dispatch
}

const SignupComponent: React.FunctionComponent<ISignupProps> = ({dispatch} : any) => {

  const signUp = new Auth(dispatch, 'users');

  return(
      <AdminWrapper>
          <p><Input placeholder="Email" onChange={e=> signUp.setEmail(e.target.value)}/></p>
          <p><Input type="password" placeholder="Password" onChange={e => signUp.setPassword(e.target.value)} /></p>
          <p><Input type="password" placeholder="Confirmer Password" onChange={e => signUp.setConfirmPassword(e.target.value)} /></p>

          <Button onClick={ e => signUp.applyForRegistration() }> Enregistrer-vous </Button>
          <p><Button ><Link to="/Auth/connexion">vous avez un compte</Link></Button></p>
          <p><Button ><Link to="/Auth/Recupere-mot-de-passe"> Recuper Mot de Passe </Link> </Button></p>
      </AdminWrapper>
  );
};

export const Signup = connect()(SignupComponent);
