import React, { Component } from "react";

import './DeleteAllTasks.css'

class DeleteAllTasks extends Component {

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button
                            className="btn-delete-all"
                            type="button"
                            onClick={this.props.deleteAll}>Delete all</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteAllTasks;