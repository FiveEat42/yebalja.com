// import { state } from "../../back/config/db_config"
import { HYDRATE } from 'next-redux-wrapper';
// import { func } from 'prop-types';
// import { getData } from '../actions/getFaqData';
import axios from 'axios';
import { func } from 'prop-types';


const initialState = {
  data:[], status:""
};

export async function getData (){
  console.log('call getDataAPI');
  //axios로 호출할 때 경로에 http://안붙이면 CORS에러발생
  return await axios('http://localhost:5000/api/json/faq');
}

const faqReducer = (state = initialState, action) => {
console.log('call - reducer')
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case 'GET_FAQ_DATA':
      console.log('GET_FAQ_DATA');
      return {...state, data: {}}

    case 'TEST_ACTION':
      console.log('TEST_ACTION')
      return {}
    default:
      return state;
  }
};

function applySetData(state, action){
  const data = action;
  console.log(data);
  return {
    ...state,
    data
  };
}


const actionCreators = {
  getData
};

export { actionCreators };



export default faqReducer;

// 되긴함
// async function faqReducer(state = initialState, action) {
//   console.log('call - reducer')
//     switch (action.type) {
//       case HYDRATE:
//         return { ...state, ...action.payload };
  
//       case 'GET_FAQ_DATA':
//         const result = await getData();
//         // const resdata = result.then(function(result){
//         //   // console.log(result.data)
//         //   return (result)
//         // })
//         console.log(result.data);
//         return {...state, data: result.data}
  
//       case 'TEST_ACTION':
//         console.log('TEST_ACTION')
//         return {}
//       default:
//         return state;
//     }
//   };

//case: 'GET_FAQ_DATA'에서 있었던 일
      //promise에서 fulfilled로 이행상태였는데, then으로 promise를 처리해야한다.
      //console을 찍어보니 getData()는 비동기함수로 실행되지않고 지나가고 있었고
      //원하는 순서대로 처리되지 않아서 await로 순서에 맞게 처리하게 함.
      
      // const asyncGetData = async () => {
      //   const result = await getData();
      //   return (result);
      // };
      


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