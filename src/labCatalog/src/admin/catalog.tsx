import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CatalogClass } from '../controller/catalog';
// import { LabFesState } from '../store';
// import Table from '../../../../../components/react-tables/src'
import styled from 'styled-components';
// import { TableStyled, TableRow, TableHeaderCell, TableBodyCell } from '../../../../../components/react-tables/src/index';
// import { ModalLayout, ModalContainer, ModalFooter } from '../../../../../components/react-modals/src/modal';
// import { Button } from '../../../../../containers/Button';
// import { Input } from '../../../../../containers/Input';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"


const ModalContent = styled.div`
  padding-top: 20px;
`
const ModalClose = styled.span`
  position: absolute;
  top: 0;
  color: #aaaaaa;
  font-size: 35px;
  font-weight: bold;
  right: 0;
  cursor: pointer;
`
const ModalHeader = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
`

// interface ICatalogProps extends CatalogState {
//   dispatch: Dispatch
//   token?: AuthToken
// }

// export const LabCatalog: React.FC<ICatalogProps> = ({
//   dispatch, token, addNewModal, catalogList,
//   selectedTest, catalogListFetching, catalogListTest,
//   catalogTestsDetails, catalogModalFetchTests
// }) => {

//   if(token){
//   const catalog = new CatalogClass(dispatch, token);

//   if (!catalogListFetching && catalogListTest.length <= 0) catalog.fetchExistingCatalog()

//   if (catalogListFetching && catalogListTest.length > 0) {
//     let catalogListIds: string[] = [];
//     catalogListTest.map(catalogTest => {
//       catalogListIds.push(catalogTest.testId)
//     })

//     catalog.fetchCatalogTests(catalogListIds);
//   }

//   if (addNewModal && catalogList.length <= 0) catalog.fetchLabTests();

//   return (addNewModal &&
//     <ModalLayout>
//       <ModalContainer>

//         <Route path="/admin/:user/catalog/addmodifytest/:test" render={({ match }) => {

//           return <AddModifyCatalogTest catalog={catalog} match={match} selectedTest={selectedTest}/>
//         }} />

//         <Route exact path="/admin/:user/catalog" render={({ match }) => {
//           return (<>
//             <ModalHeader>
//               <div><h3>Ajouter Nouveau Analyse :</h3></div>
//               <div>
//                 <ModalClose onClick={catalog.ModulConfirmationClose}><Link to="/admin/:user/catalog">&times;</Link></ModalClose>
//               </div>
//             </ModalHeader>
//             <hr />
//             <ModalContent>
//               <TableStyled>
//                 <thead>
//                   <TableRow fetch={catalogModalFetchTests}>
//                     <TableHeaderCell width={"500px"} >
//                       <input placeholder={"Nom d'analyse"}
//                         style={{ width: '100%', border: 'none' }}
//                         onChange={e => catalog.filterCatalogList(e.target.value)}
//                       />
//                     </TableHeaderCell>
//                     <TableHeaderCell>B code </TableHeaderCell>
//                     <TableHeaderCell>Tarif </TableHeaderCell>
//                     <TableHeaderCell>Selectionner </TableHeaderCell>
//                   </TableRow>
//                 </thead>
//                 <tbody style={{ height: "350px", overflowY: "scroll" }}>
//                   {
//                     catalogList.map(test =>
//                       <TableRow >
//                         <TableBodyCell width={"500px"}>
//                           <Link to={`/admin/:user/catalog/addmodifytest/${test.name.fr}`} 
//                             onClick={e=>catalog.catalogTestSelected(test.id, test.name.fr, test.finance[0] ? test.finance[0].Bcode : "-")}
//                           >
//                             {test.name.fr}
//                           </Link></TableBodyCell>
//                         <TableBodyCell> {test.finance[0] ? test.finance[0].Bcode : "-"} </TableBodyCell>
//                         <TableBodyCell> {test.finance[0] ? Math.floor(test.finance[0].Bcode * 1.34) : "-"} </TableBodyCell>
//                         <TableBodyCell> {" "} </TableBodyCell>

//                       </TableRow>
//                     )
//                   }
//                 </tbody>
//               </TableStyled>
//             </ModalContent>
//             <hr />
//             <ModalFooter>Selectionner test pour Ajouter ou Modifier votre catalog </ModalFooter>
//           </>)
//         }} />

//       </ModalContainer>
//     </ModalLayout>
//   )

//     ||

//     (<>
//       <h2>Catalogue de Laboratoire Fes</h2>
//       <SaveButton onClick={e => catalog.addNewTest()}>
//         Ajouter analyse
//         <span></span>
//       </SaveButton>
//       <TableStyled>
//         <thead>
//           <TableRow fetch={catalogListFetching}>
//             <TableHeaderCell width={"500px"}>Nom d'analyse </TableHeaderCell>
//             <TableHeaderCell>B code </TableHeaderCell>
//             <TableHeaderCell>Tarif </TableHeaderCell>
//             <TableHeaderCell>Traitance </TableHeaderCell>
//             <TableHeaderCell>Reference </TableHeaderCell>
//             <TableHeaderCell>Delai </TableHeaderCell>
//           </TableRow>
//         </thead>

//         <tbody>
//           {catalogTestsDetails ?

//             catalogTestsDetails.map(test =>
//               <TableRow key={test.testId}>
//                 <TableBodyCell width={"500px"}>{test.testName}</TableBodyCell>
//                 <TableBodyCell>{test.Bcode}</TableBodyCell>
//                 <TableBodyCell>{Math.floor(test.Bcode * 1.34)}</TableBodyCell>
//                 <TableBodyCell>{test.testPrice}</TableBodyCell>
//                 <TableBodyCell>{test.testReferred}</TableBodyCell>
//                 <TableBodyCell>{`${test.testReported} H`}</TableBodyCell>
//               </TableRow>
//             )
//             : <TableRow></TableRow>}
//         </tbody>
//       </TableStyled>
//     </>
//     )
//   } else {
//     return <Redirect to="/auth" />
//   }
// };

const SaveButton = styled.button`
  margin : 5px;
  padding : 5px;
`
const CancelButton = styled.button`
  margin : 5px;
  padding : 5px;
`
// Tests Search Liste
const SearchTestsList = styled.div`
  width : 100%;
  min-height: 50px;
  height : 100%;
`


// const mapStateToprops = ({ catalog, auth }: LabFesState) => ({

//   /**
//    * if @addNewModal pass to @true 
//    * launch modal 
//    */
//   addNewModal: catalog.addNewModal,

//   /**
//    * 
//    */
//   selectedTest: catalog.selectedTest,

//   /**
//    * @modal fetchTests @boolean 
//    * default @false
//    */
//   catalogModalFetchTests: catalog.catalogModalFetchTests,
//   /**
//    * 
//    */
//   catalogList: catalog.catalogList,

//   /**
//    * 
//    */
//   catalogListTest: catalog.catalogListTest,

//   /**
//    * 
//    */
//   catalogListFetching: catalog.catalogListFetching,

//   /**
//    * 
//    */
//   catalogUpdateConfirmMsg: catalog.catalogUpdateConfirmMsg,

//   /**
//    * 
//    */
//   updatedCatalog: catalog.updatedCatalog,

//   /**
//    * 
//    */
//   token: auth.login.token,

//   /**
//    * 
//    */
//   fetchTest: catalog.fetchTest,

//   /**
//    * 
//    */
//   catalogTestsDetails: catalog.catalogTestsDetails
// })


// export default connect(mapStateToprops)(LabCatalog);

export default <div>this is a catalog</div>

const AddModifyCatalogTest = ({ catalog, match, selectedTest }: any) => {
  if(selectedTest) {
  catalog.setSelectedTest(selectedTest);
  return (
    <div>
      <ModalHeader>
  <div><Link to="/admin/:user/dashboard">Retourner</Link></div>
        <div><h3>{match.params.test}</h3></div>
        <div>
        <ModalClose onClick={catalog.ModulConfirmationClose}>
          <Link to="/admin/:user/catalog">
            <span onClick={e=>catalog.fetchExistingCatalog()}>&times;</span>
          </Link>
        </ModalClose>
        </div>
      </ModalHeader>
      <hr />
      <ModalContent>
          <p>
            Prix de sous Traitance : 
              <input placeholder={selectedTest ? `${selectedTest.testPrice}` : ' '} 
                onChange={e=>catalog.setTestPrice(e.target.value)}
              />
            B : <span>{selectedTest ? selectedTest.Bcode  : '-'}</span>
            facteur : <input placeholder={"1.34"} />
            tarif Total : <span>{selectedTest ? Math.floor(selectedTest.Bcode * 1.34) : '-'}</span>
          </p>
          <p>
            Envoi :
          <select onChange={e=>catalog.setTestReferred(e.target.value)}>
              {selectedTest.testReferred === 'oui' ?
                <>
                <option>oui</option>
                <option>non</option>
                </>
                :
                <>
                <option>non</option>
                <option>oui</option>
                </>
              }
            </select>
            Delai : 
              <input placeholder={selectedTest.testReported ? `${selectedTest.testReported}` : '1'} 
                     onChange={e=>catalog.setTestReportedValue(e.target.value)} 
              />
            Unite :
            <select onChange={e=>catalog.setTestReportedUnit(e.target.value)}>
              <option>Heures</option>
              <option>Jours</option>
              <option>Mois</option>
            </select>
          </p>
      </ModalContent>
      
      {/* <ModalFooter><Button onClick={catalog.catalogTestSave}>Clicker pour Ajouter</Button></ModalFooter> */}
    </div>
  )
  } else {
    return<div>retourne to select Test</div>
  }
}