import * as React from 'react';
import { AdminWrapper } from '../../components/react-wrapper/src/wrapper'
import { Button } from '../../containers/Button';
import { Link } from 'react-router-dom';
import { Input } from '../../containers/Input';
import { connect } from 'react-redux';

interface IForgotPasswordProps {
}

const FP: React.FunctionComponent<IForgotPasswordProps> = (props) => {
  return (
    <AdminWrapper>
      <p><Input placeholder="Email"/></p>

      <Button > Envoyer La Recuperation </Button>
      <p><Button ><Link to="/Auth/connexion">vous avez un compte</Link></Button></p>
      <p><Button ><Link to="/Auth/Enregistrement"> Enregistrer-vous </Link> </Button></p>
    </AdminWrapper>
  );
};

export const ForgotPassword = connect()(FP);
