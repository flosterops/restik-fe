import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/user";

const rootReducer = combineReducers({
  user: userReducer,
});

export type TState = ReturnType<typeof rootReducer>;

const featureMiddleware: never[] = [];

const configureStore = (
  initialState = {}
): Store<any, AnyAction> & { dispatch: any } =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...featureMiddleware))
  );

export const store = configureStore();
