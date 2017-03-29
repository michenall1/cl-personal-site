import {REQUEST_GALLERIES, RECEIVE_GALLERIES} from '../actions/galleries';

export default function (state = {data: [], isFetching: false}, action) {
  switch (action.type) {
    case REQUEST_GALLERIES:
      state.isFetching = true;
      return state;
    case RECEIVE_GALLERIES:
      return {
        data: action.galleries,
        isFetching: false
      };
    default:
      return state;
  }
}
