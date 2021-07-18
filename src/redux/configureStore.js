import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import redirectionData from './redirectionReducer';
import fetch from 'isomorphic-fetch';

const apiHost = 'http://localhost:5000';
console.log('Server configured to hit API on route:', apiHost, 'Client to hit', process.env.NEXT_PUBLIC_BASE_URL);
console.log("rootReducer", redirectionData)

const middlewares = [];
middlewares.push(
  ReduxThunk.withExtraArgument({ fetch, host:  process.env.NEXT_PUBLIC_BASE_URL || apiHost})
);

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export function configureStore(initialState = {}) {
  return createStore(redirectionData, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));
};

export const store = configureStore((typeof window != 'undefined' && window.__NEXT_DATA__ && window.__NEXT_DATA__.props) ? window.__NEXT_DATA__.props.initialState : {});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore, {debug: true});