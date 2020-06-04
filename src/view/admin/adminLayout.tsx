import * as React from 'react';
// import Header from '../website/Header';
import Catalog from './labCatalog/src/admin/catalog';
import styled, { css } from '../../theme';
import {CatalogIcon} from '../../img/book'
import { AdminWrapper, AdminWrapperHeader, AdminWrapperBody, AdminWrapperFooter, AdminWrapperBodyPane, AdminWrapperBodyCanvas, AdminWrapperBodyPaneNav, AdminWrapperBodyPaneContent, AdminWrapperBodyCanvasTitle, AdminWrapperBodyCanvasBody } from '../../components/react-wrapper/src/wrapper';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  font-size: small;
  color: white;
  font-weight: 700;
  list-style: none;
  li:first-child {
    margin-top : 10px;
  }
  li {
    padding: 15px 5px 15px 5px;
    border-bottom: .1em solid #000000;
  }
`
const Logo = styled.div`
  padding: 25px 35px;
  border-right: .1em solid #000000;
  background : url('/images/logo.svg') no-repeat;
`

interface IAdminLayoutProps {
}

export const AdminLayout: React.FunctionComponent<IAdminLayoutProps> = (props) => {
  return(
      <AdminWrapper>
        

        <AdminWrapperHeader>
          <Logo/>
        </AdminWrapperHeader>

        <AdminWrapperBody>
          <AdminWrapperBodyPane>
            <AdminWrapperBodyPaneNav>
              <Ul>
                <li>Compte</li>
                <li>Personal</li>
                <li style={{ background: '#5c5b58'}}>
                  <div><CatalogIcon width="45" height="40" color="#ffffff"/></div>
                </li>
                <li>Demande</li>
                <li>Referal</li>
              </Ul>
            </AdminWrapperBodyPaneNav>
            <AdminWrapperBodyPaneContent>
              <Ul>
                <li>Catalog v1.0.0</li>
                <li>Voir Tests</li>
                <li>ajouter Test</li>
                <li>modifier Test</li>
                <li>suprimer Test</li>
                <li>modifier Test</li>
              </Ul>
                
            </AdminWrapperBodyPaneContent>          
          </AdminWrapperBodyPane>
          <AdminWrapperBodyCanvas>
            <AdminWrapperBodyCanvasTitle>
              
              Catalog >> Voir Catalog List</AdminWrapperBodyCanvasTitle>
            <AdminWrapperBodyCanvasBody><Catalog /></AdminWrapperBodyCanvasBody>
          </AdminWrapperBodyCanvas>
        </AdminWrapperBody>

        <AdminWrapperFooter>All Copyright Reserved for Ittyni.com(c)</AdminWrapperFooter>


        {/* old version of layout */}
        {/* <section>
          <Header />
        </section>

        <div style={{display : 'flex', alignContent : 'space-between', marginTop: '250px', width: "100%"}}>
            <AdminSidebar>
              <ul>
                <li>Compte</li>
                <li>Personelles</li>
                <li>Catalogue</li>
                <li>Demandes</li>
                <li>Rapport</li>
                <li>Referer</li>
              </ul>
            </AdminSidebar>
            <AdminContainer >

               <Catalog /> 
              
            </AdminContainer>
        </div> */}
      </AdminWrapper>
  ) ;
};
const mobile = (args : any) => css`
  @media (min-width: 576px) {
    ${css(args)};
  }
`
const tablet = (args : any) => css`
  @media (min-width: 768px) {
    ${css(args)};
  }
`
const desktop = (args: any) => css`
  @media (min-width: 992px){
    ${css(args)};
  }
`
const largeDesktop = (args: any) => css`
  @media (min-width: 992px){
    ${css(args)};
  }
`

const AdminSidebar = styled.section`

  flex : 0 0 20%;
  display : none;

  ${mobile`
      display : block;
  `}

`

const AdminContainer = styled.section`

  flex : 0 0 74% ; 
  padding : 0 20px 0 0;

  ${mobile`
    flex : 0 0 100%;
  `}

`





