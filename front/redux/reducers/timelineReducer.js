import { HYDRATE } from 'next-redux-wrapper';
//faq리듀서의 초기 State지정
const initialState = {
  data: {}
};

//상태가 변화할 때 수행되는 함수
//Type에 따른 상태변화
const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case 'GET_TIMELINE_DATA':
      return { ...state, data: {...action.payload} };

    default:
      return state;
  }
};
export default timelineReducer;