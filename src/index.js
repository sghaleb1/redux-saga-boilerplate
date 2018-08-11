import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import rootSaga from './redux/sagas';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

//<Provider store={store}><App /></Provider>