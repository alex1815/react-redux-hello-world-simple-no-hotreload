import { applyMiddleware, combineReducers, createStore } from 'redux';

export const SUBTEXT_ACTION_TYPE = "SUBTEXT";

// actions.js
export const activateGeod = geod => ({
  type: 'ACTIVATE_GEOD',
  geod,
});

export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});

export const subTextAction  = text => ({
  type: SUBTEXT_ACTION_TYPE,
  text
});

// reducers.js
export const geod = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod;
    case 'CLOSE_GEOD':
      return {};
    default:
      return state;
  }
};

export const subTextReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBTEXT_ACTION_TYPE:
            return action.text;
        default:
            return state;
    }
};

export const reducers = combineReducers({
  geod: geod,
  subText: subTextReducer,
});

// store.js
export function configureStore(initialState = {}) {

  const store = createStore(reducers, initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}

export const store = configureStore();
