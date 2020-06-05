import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";
import { History } from "history";

//===> from saga middleware
import { fork, all } from 'redux-saga/effects'

//===> auth component
import AuthReducer, {AuthSaga} from '../authentification-redux-lib/index'

//===> staff component

export const createRootReducer = (history: History) =>
  combineReducers({
    auth   : AuthReducer,
    // slider : SliderReducer,
    // catalog: catalogListReducer,
    router : connectRouter(history)
  });

export function* rootSaga() {
  yield all([
    
    //  Auth
     fork(AuthSaga),

    //  Catalog
    //  fork(CatalogSaga)

    //  Orders

  ]);
}
