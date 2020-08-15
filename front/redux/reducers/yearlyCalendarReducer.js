import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  data: []
};

const yearlyCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case 'GET_YEARLYCALENDAR_DATA':
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default yearlyCalendarReducer;