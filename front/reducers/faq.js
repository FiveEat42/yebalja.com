import { state } from "../../back/config/db_config"

export const initialState = {
  dataSet:[{
    user: 'secho',
    age : 27,
  }]
  //JSON데이터를 받을 dataList.
}
console.log('FAQQQQQQQQQQQQQQQQQQQQQQQQQ');
//액션 이름
const SET_DATA = 'SET_DATA';

export const setData = {
  type: SET_DATA,
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        dataSet:[...state.dataSet],
      }
    default:
      return state;
  }
};

export default reducer;
