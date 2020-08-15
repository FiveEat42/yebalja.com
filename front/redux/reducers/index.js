import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  user: {
    isLoggedIn: '이곳이',
    user: '리덕스의 초기값들을 저장합니다',
    name: '이곳이 리덕스에 의해 바뀌었습니다!! 정아홍홍홍',
    password: '추후에 axios에서 불러온 값들을 여기에 저장하면 될것 같습니다.',
  }
}

const changeNickname = {
  type: 'CHANGE_NICKNAME',
  data: 'boogicho',
}

//reducer는
//(이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  console.log('root Reducer');
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'CHANGE_NICKNAME':
      // 아래처럼 쓰면 오브젝트는 그대로인데 안에 내용만 바뀐거라 리액트가 다시 렌더링을 하지 않음
      // state.name = 'boogicho';
      // break;
      return {
        ...state,
        name: action.data,
      }
    default:
      return state;
  }
};

export default rootReducer;