//configureStore = store의 역할
//한 애플리케이션당 하나의 스토어를 만든다.
//스토어에는 **앱 상태 + 리듀서 + 몇가지 내장함수가 포함**된다.

import { applyMiddleware, compose } from 'redux';
import { createWrapper} from 'next-redux-wrapper';
import { createStore } from 'redux';
//history를 쌓아서 보기 위한 익스텐션을 사용하기 위함
import { composeWithDevTools } from 'redux-devtools-extension';
//여러 리듀서 등록하기
//sub리듀서를 하나로 합쳐줌
import { combineReducers } from 'redux';
import reducer from '../reducers/index';
import faqReducer from '../reducers/faq';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = () => {
  const logger = createLogger();
  const middlewares = [thunk , logger]; //saga, thunk를 넣음
  //배포용과 개발용의 미들웨어 차이를 두기 위함
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares))
  : composeWithDevTools(applyMiddleware(thunk))//middlewares배열을 여기다가 넣음.
  const store = createStore(
    combineReducers({
      reducer,
      faqReducer}), enhancer);
  return store;

};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;