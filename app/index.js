/**
 * Created by liufeng on 2017/7/3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import FooBar from './components/FooBar';
import './index.less';


let div = document.createElement('div');
let div2 = document.createElement('div');

document.body.appendChild(div);
document.body.appendChild(div2);

ReactDOM.render(<HelloWorld/>, div);
ReactDOM.render(<FooBar/>, div2);