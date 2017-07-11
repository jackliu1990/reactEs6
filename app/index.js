/**
 * Created by liufeng on 2017/7/3.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HelloCompontent from './containers/hellocompontent';
import {reducer as HelloReducer} from './reducers/helloreducer';
import HelloWorld from './components/HelloWorld';
import FooBar from './components/FooBar';
import App from './components/App';
import Map from './components/Map';
import './index.less';


let helloWorldDiv= document.createElement('div');
let footBarDiv = document.createElement('div');
let routerDiv =document.createElement('div');
let openlayerDiv = document.createElement("div");
document.body.appendChild(helloWorldDiv);
document.body.appendChild(footBarDiv);
document.body.appendChild(routerDiv);
document.body.appendChild(openlayerDiv);

ReactDOM.render(
    <App/>,
   routerDiv
);
ReactDOM.render(<HelloWorld/>, helloWorldDiv);
ReactDOM.render(<FooBar/>, footBarDiv);
ReactDOM.render(<Map/>,openlayerDiv);

//store
let store = createStore(HelloReducer);

ReactDOM.render(
    <Provider store={store}>
        <HelloCompontent />
    </Provider>,
    document.getElementById('content')
);


