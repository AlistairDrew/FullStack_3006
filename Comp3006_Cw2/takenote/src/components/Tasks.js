import React, { Component } from 'react'
import Task from "./Task"
import {Consumer} from '../context'

export default class Tasks extends Component {
    render() {
        return (
            <Consumer>{value =>{
                const {Tasks} = value
                return Tasks.map(t => <Task task={t} key={t.id} ></Task>) //Need to understand whats happening here 
                
             }}</Consumer>

            
            
        )
    }
}
