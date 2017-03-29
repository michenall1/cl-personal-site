import {combineReducers} from 'redux';
import galleriesReducer from './galleries';
import photosReducer from './photos';

export default combineReducers({
  galleries: galleriesReducer,
  photos: photosReducer
});
