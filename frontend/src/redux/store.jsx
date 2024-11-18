import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'; // Asegúrate de que este es el reducer combinado
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
  // Si Redux DevTools no está disponible, usamos compose normalmente
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Creamos el store con reducers, estado inicial y los middlewares
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)) // Aplica redux-thunk como middleware
  );

  return store;
}
