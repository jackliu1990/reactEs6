/**
 * Created by liufeng on 2017/7/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import HelloWorld from './components/HelloWorld';
import FooBar from './components/FooBar';
import './index.less';


let div = document.createElement('div');
let div2 = document.createElement('div');

document.body.appendChild(div);
document.body.appendChild(div2);

/*ReactDOM.render(<HelloWorld/>, div);
ReactDOM.render(<FooBar/>, div2);*/

ReactDOM.render(
    <Router history = {browserHistory} >
        <route path ="/" component={HelloWorld} >
            <route path ="/about" component={HelloWorld} />
            <route path ="/locations" component={FooBar} />
        </route>
    </Router>,
    document.getElementById('content')
);