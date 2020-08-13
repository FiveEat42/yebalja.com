import { HYDRATE } from 'next-redux-wrapper';


const initialState = {
  data: {}
};

const programsReducer = (state = initialState, action) => {
  console.log('programs_Reducer_call')
  switch (action.type){
    case HYDRATE:
      return {...state, ...action.data};
    case 'PROGRAM_CHANGER':
      return {...state, data: action.data};
    default:
      return state;
  }
}

export default programsReducer;