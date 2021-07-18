import {
  FETCH_REDIRECT_DATA_LOADING,
  FETCH_REDIRECT_DATA_SUCCESS,
  FETCH_REDIRECT_DATA_FAILED,
  FETCH_ALL_REDIRECT_DATA_SUCCESS,
} from './types';

export const fetchRedirectionDataLoading = (dispatch, slug) => dispatch({
  type: FETCH_REDIRECT_DATA_LOADING,
  slug
});

export const fetchRedirectionData = (slug) => {
  return async (dispatch, state, { host }) => {
    fetchRedirectionDataLoading(dispatch, slug);
    const url = `${host}/api/get-redirection?slug=${slug}`
    return fetch(url)
      .then(response => response.json())
      .then((redirectData) => {
        fetchRedirectionDataSuccess(dispatch, redirectData);
      })
      .catch(err => {
        fetchRedirectionDataFailed(dispatch, true);
        return null
      })
  }
}

export const fetchRedirectionDataSuccess = (dispatch, redirectData) => dispatch({
  type: FETCH_REDIRECT_DATA_SUCCESS,
  redirectData
});

export const fetchRedirectionDataFailed = (dispatch, error) => dispatch({
  type: FETCH_REDIRECT_DATA_FAILED,
  error
});

export const fetchAllRedirectionData = () => {
  return async (dispatch, state, { host }) => {
    const url = `${host}/api/get-all-redirections`
    return fetch(url)
      .then(response => response.json())
      .then((datas) => {
        dispatch({
          type: FETCH_ALL_REDIRECT_DATA_SUCCESS,
          datas: datas.data
        })
      })
      .catch(err => {
        return null;
      })
  }
}