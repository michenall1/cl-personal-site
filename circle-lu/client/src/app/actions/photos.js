export const REQUEST_PHOTO = 'REQUEST_PHOTO';
export function requestPhoto(id) {
  return {
    type: REQUEST_PHOTO,
    id
  };
}

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export function receivePhoto(id) {
  return {
    type: RECEIVE_PHOTO,
    id
  };
}

export function fetchPhoto(image) {
  return (dispatch, getState) => {
    if (getState().photos[image._id] !== undefined) return;
    const img = new Image();
    img.src = image.secure_url;
    dispatch(requestPhoto(image._id));
    img.onLoad = () => {
      dispatch(receivePhoto(image._id));
    };
  }
}
