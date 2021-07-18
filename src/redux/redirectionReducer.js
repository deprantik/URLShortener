import {
  FETCH_REDIRECT_DATA_LOADING,
  FETCH_REDIRECT_DATA_SUCCESS,
  FETCH_REDIRECT_DATA_FAILED,
  FETCH_ALL_REDIRECT_DATA_SUCCESS,
} from './types';

const initialState = {
  redirectData: null,
  error: null,
  slug: null,
  data: null
}

const redirectionData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REDIRECT_DATA_LOADING: {
      return {
        ...state,
        slug: action.slug,
      };
    }
    case FETCH_REDIRECT_DATA_SUCCESS: {
      return {
        ...state,
        redirectData: action.redirectData
      };
    }
    case FETCH_REDIRECT_DATA_FAILED: {
      return {
        ...state,
        error: action.error
      };
    }
    case FETCH_ALL_REDIRECT_DATA_SUCCESS: {
      return {
        ...state,
        data: action.datas
      }
    }
    default:
      return state;
  }
};

export default redirectionData;
