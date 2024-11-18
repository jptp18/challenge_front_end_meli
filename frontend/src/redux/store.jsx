import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'; 
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)) // Aplica redux-thunk como middleware
  );

  return store;
}
