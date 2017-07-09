/**
 * Created by Administrator on 17-7-9.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as HelloAction from '../actions/helloaction';

//定义组件
class HelloCompontent extends Component{
    render(){
        const {text,onChangeText,onButtonClick } = this.props;
        return (
            <div>
             <h1 onClick={onChangeText}> {text}</h1>
              <button onClick={onButtonClick}>click me</button>
            </div>
        );
    }
}

//映射Redux state 到组件的属性
function mapStateToProps(state){
    return {text:state.text}
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        onButtonClick:()=>dispatch(HelloAction.buttonClickAction),
        onChangeText:()=>dispatch(HelloAction.changeTextAction)
    }
}

//连接组件
HelloCompontent = connect(mapStateToProps, mapDispatchToProps)(HelloCompontent);

export default  HelloCompontent;


