import {REQUEST_PHOTO, RECEIVE_PHOTO} from '../actions/photos';

export default function (state = {}, action) {
  switch (action.type) {
    case REQUEST_PHOTO: {
      if (state[action.id] !== undefined) return state;
      const newState = Object.assign({}, state);
      newState[action.id] = false; // loading
      return newState;
    }
    case RECEIVE_PHOTO: {
      const newState = Object.assign({}, state);
      newState[action.id] = true; // loaded
      return newState;
    }
    default:
      return state;
  }
}
