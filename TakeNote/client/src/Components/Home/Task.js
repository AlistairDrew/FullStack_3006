import axios from 'axios';
import React from 'react';


function Task({task, getTasks, editTask}){

async function deleteTask(){
    await axios.delete(`http://localhost:5000/task/${task._id}`);

    getTasks();
}


    
    return <div className="Task">
        {task.title && <h2>{task.title}</h2> }
        {task.description && <p>{task.description}</p>}
        {task.note && ( <pre>
            <code>{task.note}</code>
            </pre>
            )}
            <button onClick={()=> editTask(task)}>Edit</button>
            <button onClick={deleteTask}>Delete</button>
    </div>
};

export default Task;