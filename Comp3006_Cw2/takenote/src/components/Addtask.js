import React, { Component } from 'react'

export default class Addtask extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type ="text" className="form-control rounded-0"></input>
                    <button className="form-control rounded-0 btn-secondary" type="submit">Add Task</button>
                </form>
            </div>
        )
    }
}
