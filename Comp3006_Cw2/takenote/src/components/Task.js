import React, { Component } from 'react'
import './Task.css'

export default class Task extends Component {
    render() {
        const {title} = this.props.Task
        return (
           
           <h3 className="text-dark text-center p-1 bg-light">
               <i className="far fa-times-circle fa-sm float-left m-1 text-danger" id = "Cross"></i>Task 
               <input type ="checkbox" className="m-2 float-right" id="check"/>
            </h3>

            
            

        )
    }
}
