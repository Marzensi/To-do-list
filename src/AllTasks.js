import React, { Component } from "react";

import OneTask from './OneTask'
import './AllTasks.css'

class AllTasks extends Component{
    render(){
        const elements = this.props.tasks.map((el,i)=>{
            return (
                <OneTask key = {i}
                         text={el}
                         index={i}
                         deleteTask = {this.props.deleteTask}
                />
            )
        });
        return(
            <ol className='list d-flex justify-content-between flex-wrap'>
                {elements}
            </ol>
        )
    }
}
export default AllTasks;