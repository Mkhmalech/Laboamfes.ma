import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";
import { History } from "history";

// import SliderReducer from './reducers/SliderReducer'



//===> from saga middleware
import { fork, all } from 'redux-saga/effects'


export interface LabFesState {
  // slider        : SliderState
  router           : RouterState
  // auth          : AuthState
  // catalog       : CatalogState
}

export const createRootReducer = (history: History) =>
  combineReducers({
    // auth   : AuthReducer,
    // slider : SliderReducer,
    // catalog: catalogListReducer,
    router : connectRouter(history)
  });

export function* rootSaga() {
  yield all([
    
    //  Auth
    //  fork(AuthSaga),

    //  Catalog
    //  fork(CatalogSaga)

    //  Orders

  ]);
}
