//react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import wrapper from '../store/configureStore'

const MyApp = ({ Component, pageProps}) => {
    return <Component {...pageProps} />
    //예전버전 next-redux-wrapper 위아래를 <Provider>로 감싸주어야하는데 이제는 필요 없음
};
// This default export is required in a new `pages/_app.js` file.
export default wrapper.withRedux(MyApp);