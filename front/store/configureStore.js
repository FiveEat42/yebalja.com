//configureStore = store의 역할
//한 애플리케이션당 하나의 스토어를 만든다.
//스토어에는 **앱 상태 + 리듀서 + 몇가지 내장함수가 포함**된다.

import { applyMiddleware, compose } from 'redux';
import { createWrapper} from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducer from '../reducers';

const configureStore = () => {
  const store = createStore(reducer);
  return store;

};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;