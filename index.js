import  React from 'react';
import {Provider} from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = ()=> (
    <Provider store={store}>
        <App/>
    </Provider>
);



AppRegistry.registerComponent('rncourse1', () => RNRedux);