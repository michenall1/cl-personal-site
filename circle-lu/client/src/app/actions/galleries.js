import axios from 'axios';

export const REQUEST_GALLERIES = 'REQUEST_GALLERIES';
function requestGalleries() {
  return {
    type: REQUEST_GALLERIES
  };
}

export const RECEIVE_GALLERIES = 'RECEIVE_GALLERIES';
function receiveGalleries(galleries) {
  return {
    type: RECEIVE_GALLERIES,
    galleries
  };
}

export function fetchGalleries(callBack) {
  return dispatch => {
    dispatch(requestGalleries());
    return axios.get("/galleries")
      .then(res => {
        dispatch(receiveGalleries(res.data));
        if (callBack) callBack(res.data);
      });
  };
}
