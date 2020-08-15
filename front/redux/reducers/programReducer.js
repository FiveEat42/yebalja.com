import { HYDRATE } from 'next-redux-wrapper';

//Program props관리를 위한 리듀서
const initialState = {
  data: {}
};

//Link하는 프로그램페이지에 따라 data(프로그램명)이 달라짐
const programsReducer = (state = initialState, action) => {
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