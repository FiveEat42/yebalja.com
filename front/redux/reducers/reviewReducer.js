import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  data: {}
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case 'GET_REVIEW_DATA':
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default reviewReducer;