import React, { Component } from 'react';

import DeleteAllTasks from './DeleteAllTasks'
import TaskForm from './TaskForm'
import AllTasks from'./AllTasks'
import './App.css'

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            tasks: [],
        }
    }

    resetInput = () => {
        this.setState({
            inputValue:""
        })
    };

    addTask = (oneTask)=> {
        this.setState({
            tasks: [...this.state.tasks, oneTask],
        })
    };

    deleteTask = (index) =>{
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index),
                ...this.state.tasks.slice(index + 1)
            ],
        })
    };

    deleteAll = () => {
        this.setState({
            tasks: []
        },()=>{
            this.resetInput();
        });
    };

    render(){
        return(
            <div className = "Container">
                <TaskForm addTask={this.addTask}/>
                <AllTasks
                    tasks={this.state.tasks}
                    deleteTask ={this.deleteTask}
                />
                <DeleteAllTasks deleteAll={this.deleteAll}/>
            </div>
        )
    }
}

export default App;