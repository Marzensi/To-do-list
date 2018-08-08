import React, { Component } from "react";

import './TaskForm.css'

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: "",
            placeholder:"type your task",
        }
    }
    handleChange = (event) => {
        this.setState ({
            inputValue: event.target.value
        })
    };

    handleClick= () => {
        if(this.state.inputValue) {
            this.props.addTask(this.state.inputValue);
            this.setState({
                inputValue: ''
            })
        }
    };

    render(){
        return(
            <div>
                <div className="container align-items-center">
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <div className="form-group">
                                <input
                                    className="list-input"
                                    value={this.state.inputValue}
                                    type="text"
                                    placeholder={this.state.placeholder}
                                    onChange={this.handleChange}
                                />
                                <button
                                    className="btn-add"
                                    type="button"
                                    onClick={this.handleClick}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TaskForm;
