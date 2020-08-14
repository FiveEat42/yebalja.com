import { HYDRATE } from 'next-redux-wrapper';


const initialState = {
  data: {}
};

const faqReducer = (state = initialState, action) => {
console.log('faqReducer')
console.log(action.type)
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case 'GET_FAQ_DATA':
      console.log('GET_FAQ_DATA');
      console.log(action.payload)
      return { ...state, data: action.payload };

    case 'TEST_ACTION':
      console.log('TEST_ACTION')
      return {...state, data : 'secho'}
    default:
      return state;
  }
};
export default faqReducer;