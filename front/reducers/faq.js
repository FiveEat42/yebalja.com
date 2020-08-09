// import { state } from "../../back/config/db_config"

export const initialState = {
  dataSet:
    {
    user: 'secho',
    age : 27,
    }
}
  //JSON데이터를 받을 dataList.
console.log('FAQQQQQQQQQQQQQQQQQQQQQQQQQ');
//액션 이름
const SET_DATA = 'SET_DATA';

export const setDataAction = (data) => {
  return {
    type: 'SET_DATA', 
    data
  }
}


// 비동기 action creator => 관련 키워드 redux-saga


// 이전상태, 액션 => 다음상태로

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_DATA:
      return {
        //안바꾸고 싶은 것 참조관계 유지해주기
        ...state,
        //바꾸고 싶은 것만 작성하기
        dataSet:{user:'secho'},
      }
    default:
      return state;
  }
};

export default reducer;
