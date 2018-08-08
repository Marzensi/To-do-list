import React, { Component } from "react";

import CheckboxLabels from './Chexbox';
import './OneTask.css'

class OneTask extends Component{

    handleClick = () =>{
        if(typeof this.props.deleteTask === "function"){
            this.props.deleteTask(this.props.index);
        }
    };

    render(){
        return(
            <li className="added-tasks">
                <div className="d-flex justify-content-flex-start">
                    <CheckboxLabels />
                    <p className='task-no'>Task No. {this.props.index + 1}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="task-description">{this.props.text}</p>
                    <button
                        className="btn-delete"
                        type="button"
                        onClick={this.handleClick}>delete</button>
                </div>
            </li>
        )
    }
}

export default OneTask;
