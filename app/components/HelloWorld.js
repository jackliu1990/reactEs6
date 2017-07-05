/**
 * Created by liufeng on 2017/7/5.
 */
import React from 'react'

class HelloWorld extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        var newName = e.target.value;
        this.setState({
            name:newName
        });
    }

    render(){
        return(
            <div>
              <h1>Hello World!!</h1>
               <p>
                 Name:
                <input onChange={this.handleChange}
                  value={this.state.name}
                 />
               </p>
             <p>Hello, {this.state.name} </p>
          </div>
          );
    }
}

export  default  HelloWorld;