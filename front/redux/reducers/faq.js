// import { state } from "../../back/config/db_config"
import { HYDRATE } from 'next-redux-wrapper';
import { func } from 'prop-types';

const initialState = {
  dataSet:
    {
      user: 'secho',
      age : 27
    }
}
  //JSON데이터를 받을 dataList.
//액션 이름

// 비동기 action creator => 관련 키워드 redux-saga


// 이전상태, 액션 => 다음상태로

const faqReducer = (state = initialState, action) => {
console.log('call - reducer')
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'SET_DATA':
      console.log('SET_DATA')
      return {
        //안바꾸고 싶은 것 참조관계 유지해주기
        ...state,
        //바꾸고 싶은 것만 작성하기
        dataSet: action.data,
      }
    default:
      return state;
  }
};




// export const getFaqData = async () => {
//   const faqData = await axios.get('localhost:5000/api/json/faq');
//   console.log(faqData);
//   console.log('getFaqData')
//   return {
//     type: 'SET_DATA',
//     faqData
//   };
// }
export default faqReducer;





// (async function fetchData(){
//   const result = await axios('https://api.yebalja.com/api/json/program'
//   ,);
//   console.log('in async function')
//   console.log(result);
// });

// const getFaqData = async () => {
//   const faqData = await axios.get('localhost:5000/api/json/program');
//   console.log(faqData);
//   return faqData;
// }