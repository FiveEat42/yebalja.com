import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  data: []
};

const noticeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case 'GET_NOTICE_DATA':
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default noticeReducer;